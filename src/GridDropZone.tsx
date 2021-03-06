import * as React from "react";
import { StateType } from "react-gesture-responder";
import { useMeasure } from "./use-measure";
import { GridContext } from "./GridContext";
import { GridSettings, ChildRender } from "./grid-types";
import { swap } from "./swap";
import { getPositionForIndex, getTargetIndex } from "./helpers";
import { GridItemContext } from "./GridItemContext";

export interface GridDropZoneProps
  extends React.HTMLAttributes<HTMLDivElement> {
  boxesPerRow: number;
  rowHeight: number;
  id: string;
  children: React.ReactNodeArray;
  disableDrag?: boolean;
  disableDrop?: boolean;
  style?: React.CSSProperties;
}

interface PlaceholderType {
  startIndex: number;
  targetIndex: number;
}

export function GridDropZone({
  id,
  boxesPerRow,
  children,
  style,
  disableDrag = false,
  disableDrop = false,
  rowHeight,
  ...other
}: GridDropZoneProps) {
  const {
    traverse,
    startTraverse,
    endTraverse,
    register,
    measureAll,
    onChange,
    remove,
    getActiveDropId,
  } = React.useContext(GridContext);

  const ref = React.useRef<HTMLDivElement>(null);
  const { bounds, remeasure } = useMeasure(ref);
  const [draggingIndex, setDraggingIndex] = React.useState<number | null>(null);
  const [placeholder, setPlaceholder] = React.useState<PlaceholderType | null>(
    null
  );
  //Check if there is a div with the data-scroll attribute and then store it in the scrollContainer
  const [scrollContainer, setScrollContainer] = React.useState<Element | null>(
    ref.current ? ref.current.closest("[data-scroll]") : null
  );
  const [scrollDir, setScrollDir] = React.useState<number>(0);

  const scrollRef = React.useRef<number>(0);

  const scroll = () => {
    if (scrollDir !== 0) {
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollTop + 10 * scrollDir;
      }
      document.documentElement.scrollTop =
        document.documentElement.scrollTop + 6 * scrollDir;
      document.body.scrollTop = document.body.scrollTop + 6 * scrollDir;
      scrollRef.current = requestAnimationFrame(scroll);
    }
  };

  React.useEffect(() => {
    //If scroll direction isn't 0 start the scrolling animation
    if (scrollDir !== 0) {
      scrollRef.current = requestAnimationFrame(scroll);
    }
    return () => cancelAnimationFrame(scrollRef.current);
  }, [scrollDir]);

  const traverseIndex =
    traverse && !traverse.execute && traverse.targetId === id
      ? traverse.targetIndex
      : null;

  const grid: GridSettings = {
    columnWidth: bounds.width / boxesPerRow,
    boxesPerRow,
    rowHeight,
  };

  const childCount = React.Children.count(children);

  /**
   * Register our dropzone with our grid context
   */

  React.useEffect(() => {
    register(id, {
      top: bounds.top,
      bottom: bounds.bottom,
      left: bounds.left,
      right: bounds.right,
      width: bounds.width,
      height: bounds.height,
      count: childCount,
      grid,
      disableDrop,
      remeasure,
    });
  }, [childCount, disableDrop, bounds, id, grid]);

  /**
   * Unregister when unmounting
   */

  React.useEffect(() => {
    return () => remove(id);
  }, [id]);

  // keep an initial list of our item indexes. We use this
  // when animating swap positions on drag events
  const itemsIndexes = React.Children.map(children, (_, i) => i);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        ...style,
      }}
      {...other}
    >
      {grid.columnWidth === 0
        ? null
        : React.Children.map(children, (child, i) => {
            const isTraverseTarget =
              traverse &&
              traverse.targetId === id &&
              traverse.targetIndex === i;

            const order = placeholder
              ? swap(
                  itemsIndexes,
                  placeholder.startIndex,
                  placeholder.targetIndex
                )
              : itemsIndexes;

            const pos = getPositionForIndex(
              order.indexOf(i),
              grid,
              traverseIndex
            );

            /**
             * Handle a child being dragged
             * @param state
             * @param x
             * @param y
             */

            function onMove(state: StateType, x: number, y: number) {
              if (!ref.current) return;

              if (draggingIndex !== i) {
                setDraggingIndex(i);
              }

              const targetDropId = getActiveDropId(
                id,
                x + grid.columnWidth / 2,
                y + grid.rowHeight / 2
              );

              if (targetDropId && targetDropId !== id) {
                startTraverse(id, targetDropId, x, y, i);
              } else {
                endTraverse();
              }

              const targetIndex =
                targetDropId !== id
                  ? childCount
                  : getTargetIndex(
                      i,
                      grid,
                      childCount,
                      state.delta[0],
                      state.delta[1]
                    );

              if (targetIndex !== i) {
                if (
                  (placeholder && placeholder.targetIndex !== targetIndex) ||
                  !placeholder
                ) {
                  setPlaceholder({
                    targetIndex,
                    startIndex: i,
                  });
                }
              } else if (placeholder) {
                setPlaceholder(null);
              }
              //if the user defines a different scroll container we use those boundaries instead of the window
              if (scrollContainer) {
                //touches top boundary
                if (y <= scrollContainer.scrollTop) {
                  setScrollDir(-1);
                }
                //touches bottom boundary
                else if (
                  y >=
                  scrollContainer.scrollTop +
                    scrollContainer.clientHeight -
                    grid.rowHeight
                ) {
                  setScrollDir(1);
                } else {
                  setScrollDir(0);
                }
              } else {
                //touches top boundary
                if (y <= document.documentElement.scrollTop) {
                  console.log("touches top boundary");
                  // This is broken on collections it thinks it's always at top boundary
                  // setScrollDir(-1);
                }
                //touches bottom boundary
                else if (
                  y >=
                  document.documentElement.scrollTop +
                    document.documentElement.clientHeight -
                    grid.rowHeight
                ) {
                  setScrollDir(1);
                } else {
                  setScrollDir(0);
                }
              }
            }

            /**
             * Handle drag end events
             */

            function onEnd(state: StateType, x: number, y: number) {
              setScrollDir(0);
              const targetDropId = getActiveDropId(
                id,
                x + grid.columnWidth / 2,
                y + grid.rowHeight / 2
              );

              const targetIndex =
                targetDropId !== id
                  ? childCount
                  : getTargetIndex(
                      i,
                      grid,
                      childCount,
                      state.delta[0],
                      state.delta[1]
                    );

              // traverse?
              if (traverse) {
                onChange(
                  traverse.sourceId,
                  traverse.sourceIndex,
                  traverse.targetIndex,
                  traverse.targetId
                );
              } else {
                onChange(id, i, targetIndex);
              }

              setPlaceholder(null);
              setDraggingIndex(null);
            }

            function onStart() {
              measureAll();
              setScrollContainer(
                ref.current ? ref.current.closest("[data-scroll]") : null
              );
            }

            return (
              <GridItemContext.Provider
                value={{
                  top: pos.xy[1],
                  disableDrag,
                  endTraverse,
                  mountWithTraverseTarget: isTraverseTarget
                    ? [traverse!.tx, traverse!.ty]
                    : undefined,
                  left: pos.xy[0],
                  i,
                  onMove,
                  onEnd,
                  onStart,
                  grid,
                  dragging: i === draggingIndex,
                  scrollContainer,
                }}
              >
                {child}
              </GridItemContext.Provider>
            );
          })}
    </div>
  );
}
