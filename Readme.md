
  

<div  align="center">

  

<img

  

max-width="300px"

  

alt="A demo showing views being swiped left and right."

  

src="https://raw.githubusercontent.com/bmcmahen/react-dnd-grid/master/demo.gif">

  

</div>

  

  

# react-grid-dnd

  

Fork of @benmcmahen's react-grid-dnd package

  

[![npm package](https://img.shields.io/npm/v/react-dnd-grid/latest.svg)](https://www.npmjs.com/package/react-dnd-grid)

  

  

Grid style drag and drop, built with React. See a live example on [codesandbox](https://codesandbox.io/embed/gracious-wozniak-kj9w8). You can also see it in action [here](https://react-gesture-responder.netlify.com/).

  

  

## Features

  

  

-  **Supports dragging between arbitrary number of lists**.

  

-  **Built with [react-gesture-responder](https://github.com/bmcmahen/react-gesture-responder) to enable better control over gesture delegation.**

  

-  **Disable drop targets or dragging altogether**

  

-  **Animated with react-spring**

  

  

## Install

  

  

Install `@myclevergroup/react-grid-dnd-but-better` and `react-gesture-responder` using yarn or npm.

  

  

```

  

yarn add @myclevergroup/react-grid-dnd-but-better react-gesture-responder

  

```

  

  

## Usage

  

  

Because `GridItem` components are rendered with absolute positioning, you need to ensure that `GridDropZone` has a specified height or flex, like in the example below.

  

  

```jsx
**Prettier 2.2.1**
[Playground link](https://prettier.io/playground/#N4Igxg9gdgLgprEAuEAdKACD70EsC2ADhAE4wbA6bZToDiJuAJgMLTwAeMACiRAG7M4JADRUsVBswAifQgC1ocMbWqTGTAJLx8K9BNUBnAO4BDQuJroAvhgBmffBJAk4psDAC0Acw2emUEyoIADcluGqdgCuUB640FgAohymRAA2cAAUAJQUEeiQUIbkANq4OoYiGIZwMNpw+IYAuhgAvBgASm4eAHRRNQDKMKbwmSUAjFUATFUAzFUALE3ZIRgA9GvVUYSEaQCeGHsQUSQYEMaYxSNw+WqqGxjDJN61GMwYxrhpaWdQ+xgAIzg1VeuDsGCYJFM3m8uCg3nsjl+wMhEEIAC8lI8IBhTFAIDAABbCHq3aKxGDxajQFiEvEvTKGY4kMBwTRMKpMk6szSBOAcKpPF51PkCx6mZ61dm5SiqAwFaDFLBQfkwIbXNrVMyETLlBqVarMnmiwUS4W8pj8la3Gp1CqZFVcdXwa1yqxQay3eVQVwwE6YTK3AA8UlY7FVvAEQlOv1p9LgrWANLp8Lg1gAfMHQ7I0YoVbdmK1gnrGsFbgCIBw4IZuMIOudEwtPW6qHxjAAJOC4byEmCJ8YABgHzf07uKewyieAGGJ3d7SGcCyHhA4wQw1hHd3QmZbqmAJcMPXw5l1OiwrXTGEDu-QIY09ScGAA1nA9omSxng0xcPwbTAJwmwCyqOVCfEwRILtgICDgOACkwR6FuUCzj2MCQcEMHwWgN4epu3o7iBe4fsGazfvwBFIUGayhg+FHetk2R4e6VHZnIeZwHRzHURobCwBGfCCJaJCcVQrqETYEQgCIIBopSirIKAEpttwEoIIYyAgKYaRmHs6nSQCUJgC+aqEO4cLeMgMAkFEyggA0QJMJaTAADL0lE0JwAAYqQx4wJS8IaaYUQwBAUkgL2+BpAA6oSeqGKZrIDGp5Q-uUewaWAhh6SAcI1GQvDQseyB2FpNTSQAVoYHAAEKGcZAypHAzlwnAxWlbZlUcAM5kZAAilEBKtUgJVpGVICmSQeUaQCphAmkYWEIwsBRcwRLIAAHAO0mLRANRRVChAaYt1bCPwrXSQAjgN8CRoQ6koKYhieCqcBOWFrhXbgrgFd4RXDe10k1PguCWdZtmGD1cD9YNbWjbZwwAit4GEsgMwgFZphfOZbD4H9dmGAArGF-RwAAKrN90jWN-A2RaCBqmAjCEDAACCgRDABsM1BuQA)
<!-- prettier-ignore -->
```sh
--parser babel
```

**Input:**
<!-- prettier-ignore -->
```jsx

  

import {

  

GridContextProvider,

  

GridDropZone,

  

GridItem,

  

swap

  

} from  "react-grid-dnd";

  

  

function  Example() {

  

const [items, setItems] = React.useState([1, 2, 3, 4]); // supply your own state

  

  

// target id will only be set if dragging from one dropzone to another.

  

function  onChange(sourceId, sourceIndex, targetIndex, targetId) {

  

const  nextState = swap(items, sourceIndex, targetIndex);

  

setItems(nextState);

  

}

  

  

return (

  

<GridContextProvider  onChange={onChange}>

  

<GridDropZone

  

id="items"

  

boxesPerRow={4}

  

rowHeight={100}

  

style={{ height:  "400px" }}

  

>

  

{items.map(item  => (

  

<GridItem  key={item}>

  

<div

  

style={{

  

width:  "100%",

  

height:  "100%"

  

}}

  

>

  

{item}

  

</div>

  

</GridItem>

  

))}

  

</GridDropZone>

  

</GridContextProvider>

  

);

  

}

  
**Prettier 2.2.1**
[Playground link](https://prettier.io/playground/#N4Igxg9gdgLgprEAuEAdKACD70EsC2ADhAE4wbA6bZToDiJuAJgMLTwAeMACiRAG7M4JADRUsVBswAifQgC1ocMbWqTGTAJLx8K9BNUBnAO4BDQuJroAvhgBmffBJAk4psDAC0Acw2emUEyoIADcluGqdgCuUB640FgAohymRAA2cAAUAJQUEeiQUIbkANq4OoYiGIZwMNpw+IYAuhgAvBgASm4eAHRRNQDKMKbwmSUAjFUATFUAzFUALE3ZIRgA9GvVUYSEaQCeGHsQUSQYEMaYxSNw+WqqGxjDJN61GMwYxrhpaWdQ+xgAIzg1VeuDsGCYJFM3m8uCg3nsjl+wMhEEIAC8lI8IBhTFAIDAABbCHq3aKxGDxajQFiEvEvTKGY4kMBwTRMKpMk6szSBOAcKpPF51PkCx6mZ61dm5SiqAwFaDFLBQfkwIbXNrVMyETLlBqVarMnmiwUS4W8pj8la3Gp1CqZFVcdXwa1yqxQay3eVQVwwE6YTK3AA8UlY7FVvAEQlOv1p9LgrWANLp8Lg1gAfMHQ7I0YoVbdmK1gnrGsFbgCIBw4IZuMIOudEwtPW6qHxjAAJOC4byEmCJ8YABgHzf07uKewyieAGGJ3d7SGcCyHhA4wQw1hHd3QmZbqmAJcMPXw5l1OiwrXTGEDu-QIY09ScGAA1nA9omSxng0xcPwbTAJwmwCyqOVCfEwRILtgICDgOACkwR6FuUCzj2MCQcEMHwWgN4epu3o7iBe4fsGazfvwBFIUGayhg+FHetk2R4e6VHZnIeZwHRzHURobCwBGfCCJaJCcVQrqETYEQgCIIBopSirIKAEpttwEoIIYyAgKYaRmHs6nSQCUJgC+aqEO4cLeMgMAkFEyggA0QJMJaTAADL0lE0JwAAYqQx4wJS8IaaYUQwBAUkgL2+BpAA6oSeqGKZrIDGp5Q-uUewaWAhh6SAcI1GQvDQseyB2FpNTSQAVoYHAAEKGcZAypHAzlwnAxWlbZlUcAM5kZAAilEBKtUgJVpGVICmSQeUaQCphAmkYWEIwsBRcwRLIAAHAO0mLRANRRVChAaYt1bCPwrXSQAjgN8CRoQ6koKYhieCqcBOWFrhXbgrgFd4RXDe10k1PguCWdZtmGD1cD9YNbWjbZwwAit4GEsgMwgFZphfOZbD4H9dmGAArGF-RwAAKrN90jWN-A2RaCBqmAjCEDAACCgRDABsM1BuQA)
<!-- prettier-ignore -->
```sh
--parser babel
```

**Input:**
<!-- prettier-ignore -->
```jsx

  

import {

  

GridContextProvider,

  

GridDropZone,

  

GridItem,

  

swap

  

} from  "react-grid-dnd";

  

  

function  Example() {

  

const [items, setItems] = React.useState([1, 2, 3, 4]); // supply your own state

  

  

// target id will only be set if dragging from one dropzone to another.

  

function  onChange(sourceId, sourceIndex, targetIndex, targetId) {

  

const  nextState = swap(items, sourceIndex, targetIndex);

  

setItems(nextState);

  

}

  

  

return (

  

<GridContextProvider  onChange={onChange}>

  

<GridDropZone

  

id="items"

  

boxesPerRow={4}

  

rowHeight={100}

  

style={{ height:  "400px" }}

  

>

  

{items.map(item  => (

  

<GridItem  key={item}>

  

<div

  

style={{

  

width:  "100%",

  

height:  "100%"

  

}}

  

>

  

{item}

  

</div>

  

</GridItem>

  

))}

  

</GridDropZone>

  

</GridContextProvider>

  

);

  

}

  

```

**Output:**
<!-- prettier-ignore -->
```jsx
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";

function Example() {
  const [items, setItems] = React.useState([1, 2, 3, 4]); // supply your own state

  // target id will only be set if dragging from one dropzone to another.

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    const nextState = swap(items, sourceIndex, targetIndex);

    setItems(nextState);
  }

  return (
    <GridContextProvider onChange={onChange}>
      <GridDropZone
        id="items"
        boxesPerRow={4}
        rowHeight={100}
        style={{ height: "400px" }}
      >
        {items.map((item) => (
          <GridItem key={item}>
            <div
              style={{
                width: "100%",

                height: "100%",
              }}
            >
              {item}
            </div>
          </GridItem>
        ))}
      </GridDropZone>
    </GridContextProvider>
  );
}

```

  

  

## Dragging between lists

  

  

You can see this example in action on [codesandbox](https://codesandbox.io/embed/gracious-wozniak-kj9w8).

  

  

**Prettier 2.2.1**
[Playground link](https://prettier.io/playground/#N4Igxg9gdgLgprEAuEACVAdKWCWBbABwgCcZVgst1KoBxYnAEwGFp4APGABWIgDcmcYgBoa1bHQaMAIrwIAtaHFETxWekwCS8PCqqYJAZwDuAQwJ6oaqHn5wxBrAF9UAM155qIYnFNgYALQA5lIBjFCMGCAA3A5xEq4ArlD+ONDoAIIEBAAUAJTk8ViQUIZkANo4OobCqIZwMNpweIYAuqgAvKgASr7+AHSJ9QDKMKbwORSqjlAANnCuMEio5UVQwKhMy6gAjLVQpnhw21EARghRqE6W1htb6ABM+4fHXgBWEPZo1+gzt5uMbYAZmeRxOIDepkM0Eu1zWd0B6AALKDXphwAALBiGWE3GYI7YAVlR4IxvhgZOIuPhAO2ADYSV5ujgwBjTMRIt81q08TQGEEMUsVjT7qgAOyM9FBOAkaXU6Y0AnoAAckqixESBCEMHl+kVtPQAE41SBTLMWV8rryJErdgAGE0Aa3GlJwUEtcIVNoNuz2qAOYK8BEOuqs+J9Oye-pe4OdMBwHu5ayceViXr1CWSqXSqGgzDZUGlOWhiWIYDgmkYtRLZYrETg7FqY2I0sa9cbqGbrcrBSmGdwrlQOS7DR7hXTKWgZXQPkMiVmZC6tj4cByayqzUM5Rr5crPPX1XKI8ajH3E53dcYDetWGPmnba1Tax8MFLYfqjWqkzW-V-G5aN5QNuEClrup7bLO84wOUdpnv2QF3uBM5wHOC7lDsrTJk+E5OGs1glNOqCQQunR1GYuT-luF57tWIG1veV4dne7bYfBL5vugH5NC034Tr+-SUYBwGgRWSFEShUFYWm8G4RO1jscQVhrhOAA8GgsGwDbcLwAhXsQ6B5gW0odMAhmmIWcBOAAfGsKmMDgfDoGAsxQoYAByLwdFEJRjG6QhRDZqnqbIEAKEoazOa5HlHF5ICMHIABeSioPMixROujCxalOogGspwQOwKFcEI3QQMYJlIrJbFlQAEnAOACjAJlinaVVhjQgXwcAlH9Nl-R4OYOT-ugHRWUOtnqdx6COnAACeJn-v0AaWZ17USHZDlOS5hjuZ5UQhEwAT-gFtn2Y5qCRTt0VwLFB2MEdOgBD5CA5attyLctMGtP0MAQAAqtkQjMFCq55G11gqQA9Gdb0zFDMO2ZDk06LDNB5GDiPBXIijuqj61Y6FOP2BOl27TFUTxaFSXukRDWCulE5MLF-L07lE75YVhjFcQpXlcAlXPrV9WNc1rVrHjWDddU-QszA-WDcNnRjcp8FqVIU2oDN81S80S0vNZp2bRd21kzd+2hMdIAS1AG3naT123Rbj3PbAJ0TjreB60cX0-f9gPEMD9T5ODcPQw51vw+HmPqyjj4Y6pSNSCFYW44jCMJ+prCwFpPD8IIxDW6xa3OCAwggKF8ZTsgoDsrwxhcOyCCGMgpqzGYs3N2XpzEH4M0wMMwZgG6QTIDAGrKCAzTnIwV6MAAMuZQSJKY0oAGIkANMDxoWLemIkv2lyAgp4LMADqGIboYg9wMMTdVA5VSzS3YA7Yfbr1KQPArwNyCuGa9RlzeIYdgAAhHuYA+7DBeHPPyv9-4TyAewYYw95gAEVEgQHgHA2YACQDBmIB-FupxTDnFmIfAgDBYCnyYBSZAyoHR4N4PUU+PcCAtwoShIQK5D4AEcMHwFzgQZuKAoQBHdHAWeh8fB8JwD4L+QQf5ID-jgie9Q8A4FHuPMuhgUFwHQZguA2DcFjFONQxgtCkBPBAGPUwOBzSFlYHgRRk9DCEkPkMOAAAVEhwjlG4L4IkS8L1hhgAYAQGAGQIijFmvMIxlknBAA)
<!-- prettier-ignore -->
```sh
--parser babel
```

**Input:**
<!-- prettier-ignore -->
```jsx
  

import {

  

GridContextProvider,

  

GridDropZone,

  

GridItem,

  

swap,

  

move

  

} from  "react-grid-dnd";

  

  

function  App() {

  

const [items, setItems] = React.useState({

  

left: [

  

{ id:  1, name:  "ben" },

  

{ id:  2, name:  "joe" },   

  

{ id:  3, name:  "jason" },

  

{ id:  4, name:  "chris" },

  

{ id:  5, name:  "heather" },

  

{ id:  6, name:  "Richard" }

  

],

  

right: [

  

{ id:  7, name:  "george" },

  

{ id:  8, name:  "rupert" },

  

{ id:  9, name:  "alice" },

  

{ id:  10, name:  "katherine" },

  

{ id:  11, name:  "pam" },

  

{ id:  12, name:  "katie" }

  

]

  

});

  

  

function  onChange(sourceId, sourceIndex, targetIndex, targetId) {

  

if (targetId) {

  

const  result = move(

  

items[sourceId],

  

items[targetId],

  

sourceIndex,

  

targetIndex

  

);

  

return  setItems({

  

...items,

  

[sourceId]:  result[0],

  

[targetId]:  result[1]

  

});

  

}

  

  

const  result = swap(items[sourceId], sourceIndex, targetIndex);

  

return  setItems({

  

...items,

  

[sourceId]:  result

  

});

  

}

  

  

return (

  

<GridContextProvider  onChange={onChange}>

  

<div  className="container">

  

<GridDropZone

  

className="dropzone left"

  

id="left"

  

boxesPerRow={4}

  

rowHeight={70}

  

>

  

{items.left.map(item  => (

  

<GridItem  key={item.name}>

  

<div  className="grid-item">

  

<div  className="grid-item-content">

  

{item.name[0].toUpperCase()}

  

</div>

  

</div>

  

</GridItem>

  

))}

  

</GridDropZone>

  

<GridDropZone

  

className="dropzone right"

  

id="right"

  

boxesPerRow={4}

  

rowHeight={70}

  

>

  

{items.right.map(item  => (

  

<GridItem  key={item.name}>

  

<div  className="grid-item">

  

<div  className="grid-item-content">

  

{item.name[0].toUpperCase()}

  

</div>

  

</div>

  

</GridItem>

  

))}

  

</GridDropZone>

  

</div>

  

</GridContextProvider>

  

);

  

}
```

**Output:**
<!-- prettier-ignore -->
```jsx
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move,
} from "react-grid-dnd";

function App() {
  const [items, setItems] = React.useState({
    left: [
      { id: 1, name: "ben" },

      { id: 2, name: "joe" },

      { id: 3, name: "jason" },

      { id: 4, name: "chris" },

      { id: 5, name: "heather" },

      { id: 6, name: "Richard" },
    ],

    right: [
      { id: 7, name: "george" },

      { id: 8, name: "rupert" },

      { id: 9, name: "alice" },

      { id: 10, name: "katherine" },

      { id: 11, name: "pam" },

      { id: 12, name: "katie" },
    ],
  });

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    if (targetId) {
      const result = move(
        items[sourceId],

        items[targetId],

        sourceIndex,

        targetIndex
      );

      return setItems({
        ...items,

        [sourceId]: result[0],

        [targetId]: result[1],
      });
    }

    const result = swap(items[sourceId], sourceIndex, targetIndex);

    return setItems({
      ...items,

      [sourceId]: result,
    });
  }

  return (
    <GridContextProvider onChange={onChange}>
      <div className="container">
        <GridDropZone
          className="dropzone left"
          id="left"
          boxesPerRow={4}
          rowHeight={70}
        >
          {items.left.map((item) => (
            <GridItem key={item.name}>
              <div className="grid-item">
                <div className="grid-item-content">
                  {item.name[0].toUpperCase()}
                </div>
              </div>
            </GridItem>
          ))}
        </GridDropZone>

        <GridDropZone
          className="dropzone right"
          id="right"
          boxesPerRow={4}
          rowHeight={70}
        >
          {items.right.map((item) => (
            <GridItem key={item.name}>
              <div className="grid-item">
                <div className="grid-item-content">
                  {item.name[0].toUpperCase()}
                </div>
              </div>
            </GridItem>
          ))}
        </GridDropZone>
      </div>
    </GridContextProvider>
  );
}

```


  

## Drag scrolling

  

You can add `[data-scroll]` to an external container element in your code to enable vertical scrolling when the draggable element reaches the top and bottom boundaries. I will add a code sandbox soon as an example.



**Prettier 2.2.1**
[Playground link](https://prettier.io/playground/#N4Igxg9gdgLgprEAuEBLAtgBwgJxgAmAB0oT98SSBxHVAEwGFp4APGABRwgDd64cANJSjlhNegBEumAFrQ4Q0iIpLxdAJLx0isipIBnAO4BDTMNFKAvvgBmXdKJA44xsDAC0Ac1p13dKHREIADc5nrKwjYArlBuqNDkAKIsxlgANnAAFACUhGHCkFD6BADaqFr6Avj6cDCacOj6ALr4ALz4AEoubgB0UTUAyjDG8JklAIxVAExVAMxVACxN2cH4APRr1VGYmGkAnvh7EFE4+BCGIsUjcPlKFiQb+MM4nrX49PiGqGlpZ1D7+AARnBqm9UDZ8HQcMZPJ5UFBPLZ7H8QVCIJgAF7yJ4QfDGKAQGAAC34PVuJGisRg8WU0AYRPxr0y+mOODAcHUdCqLJO7PUATgLCqz1edQFQqexhetU5uWId3ChWK5CggpgQ2ubWqJkwmXKDUq1VZfPFwqlov5dEFK3JRRlFUyqrYGvgNoVwkstvuUGcMBOIkytwAPHRUNxISNjO59GAuD9qjA9hlWsBgPgSahPESYEhHABWAAMBcwLCCVR4-BsaXOAE1c0EY3G0kF8JZLAA+EhBtRMWBqzg8PinP70xlwFN0hkIuAdrtqKTouSq230VpBfWNIK2wEQFhwfTsfgdc4phae91KLiGAAScEz2ZT4yL590wmKSfHqfTd6zOccCyLEsWzbW1OwvEhgA3fQenQUw9S0chWnbfBA3AqBux8eoHHwABrOA9hTDdZzQkMw1td9k1TW0vjoYlcwoEAnwLABSMtbQzX96KCJjWJAW0QLQsDXyUSCtBfCIlCDNZQ24ISJK7NY1CwuTvWybJxO9KT52kJc4BU8ItJ8XtWA4LheCtHAwKkmSwNU0I0MsEABBAdFqWgfRkFAKUr3YKUEA8lBjDSEw9g85zAWhMA8PVTBXHhTxkBgHAogUEAGmBOgrToAAZRkohhOAADFcFgmBqQRZAQGMKIYAgJyQGzdA0gAdSJfV9Fi9kBn88ow3KPZKrAfQwrQO08E4GFYOQGwgpqZyACt9BYAAhSLooGVI4Gy+E4Gm2bUsWlgBnijIAEUokJXakBmtI5pAWKcBqHBKsBYxgTSerMFoWBmvoYlkAADgLZyvogGpmuhTBKq+-d+G4XbnIARwu+AB0wAKqv0dxVTgLL6ucZHUGcCbPCm679ucmp0FQRLktS-QTrgc7Lr227UuGQFftoolkBmEAkuMb54qYdAybS-Q83q-o4AAFTegKbru7gUstBB1VjVBMBgABBAIhg-VmajbIA)
<!-- prettier-ignore -->
```sh
--parser babel
```

**Input:**
<!-- prettier-ignore -->
```jsx
import {

  

GridContextProvider,

  

GridDropZone,

  

GridItem,

  

swap

  

} from  "react-grid-dnd";

  

  

function  Example() {

  

const [items, setItems] = React.useState([1, 2, 3, 4]); // supply your own state

  

  

// target id will only be set if dragging from one dropzone to another.

  

function  onChange(sourceId, sourceIndex, targetIndex, targetId) {

  

const  nextState = swap(items, sourceIndex, targetIndex);

  

setItems(nextState);

  

}

  

  

return (

  
<div data-scroll style={{ height:  "500px", overflowY: "scroll" }}>
<GridContextProvider  onChange={onChange}>
<GridDropZone

  

id="items"

  

boxesPerRow={4}

  

rowHeight={100}

  

style={{ height:  "400px" }}

  

>

  

{items.map(item  => (

  

<GridItem  key={item}>

  

<div

  

style={{

  

width:  "100%",

  

height:  "100%"

  

}}

  

>

  

{item}

  

</div>

  

</GridItem>

  

))}

  

</GridDropZone>

  

</GridContextProvider>
</div>
  

);

  

}
```

**Output:**
<!-- prettier-ignore -->
```jsx
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";

function Example() {
  const [items, setItems] = React.useState([1, 2, 3, 4]); // supply your own state

  // target id will only be set if dragging from one dropzone to another.

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    const nextState = swap(items, sourceIndex, targetIndex);

    setItems(nextState);
  }

  return (
    <div data-scroll style={{ height: "500px", overflowY: "scroll" }}>
      <GridContextProvider onChange={onChange}>
        <GridDropZone
          id="items"
          boxesPerRow={4}
          rowHeight={100}
          style={{ height: "400px" }}
        >
          {items.map((item) => (
            <GridItem key={item}>
              <div
                style={{
                  width: "100%",

                  height: "100%",
                }}
              >
                {item}
              </div>
            </GridItem>
          ))}
        </GridDropZone>
      </GridContextProvider>
    </div>
  );
}

```

  

  

  

## Dev Setup for editing package locally

  

#### Clone the repo

  
  

```
git clone https://github.com/MyCleverGroup/react-grid-dnd.git
```

  
  

#### Create yarn links in repo

  

```
cd react-grid-dnd
yarn
yarn link
cd node_modules/react
yarn link
cd ../react-dom
yarn link
```

#### Go to project I need to link to

  

```
cd my/testing/project
yarn add @myclevergroup/react-grid-dnd-but-better
yarn link "@myclevergroup/react-grid-dnd-but-better"
yarn link "react"
yarn link "react-dom"
```