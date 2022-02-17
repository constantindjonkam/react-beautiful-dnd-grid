# react-beautiful-dnd-grid

## Installation

```
npm i @constantindjm/react-beautiful-dnd-grid --save-dev
```

## Demo

https://stackblitz.com/edit/react-beautiful-dnd-grid-demo

![Demo gif](./doc/demo.gif)

## Usage

```javascript
import React, { useState } from "react";
import { DragDropContainer } from "@constantindjm/react-beautiful-dnd-grid";

const noop = function() {};

const list = [{ id: "0" }, { id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

const DraggableItem = props => <div>id: {props.item.id}</div>;

const Component = () => {
  const [disableDrag, setDisableDrag] = useState(false);

  return (
    <DragDropContainer
      items={list}
      direction="horizontal"
      maxItems={3}
      render={item => <DraggableItem item={item} />}
      onDragEnd={noop}
      gap={10}
      isDragDisabled={disableDrag}
      containerStyles={{ maxWidth: 800 }}
    />
  );
};
```
