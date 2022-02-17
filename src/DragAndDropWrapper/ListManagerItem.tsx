import React, { ReactElement } from "react";
import { Draggable, DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import hash from "object-hash";

export interface ListManagerItemProps {
  item: any;
  index: number;
  isDragDisabled?: boolean;
  render(item: any): ReactElement<{}>;
}

export const ListManagerItem: React.FC<ListManagerItemProps> = props => {
  const { item, index, render, isDragDisabled } = props;

  return (
    <Draggable draggableId={hash(item)} index={index} isDragDisabled={isDragDisabled}>
      {(provided: DraggableProvided, _: DraggableStateSnapshot) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {render(item)}
        </div>
      )}
    </Draggable>
  );
};
