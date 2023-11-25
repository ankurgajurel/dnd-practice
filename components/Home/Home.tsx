"use client";

import { shoppingList } from "@/data/List";
import EachShop from "./EachShop";
import { ReactNode, useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Home(): ReactNode {
  const [shop, setShop] = useState(shoppingList);

  function handleDragDrop(result: any) {
    console.log("dragged", result);
    const { destination, source, type } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    if (type === "group") {
      const newShop = [...shop];
      const [removed] = newShop.splice(source.index, 1);
      newShop.splice(destination.index, 0, removed);
      setShop(newShop);
    }

  }

  return (
    <>
      <div className="flex flex-col items-center gap-10 py-10">
        <h1 className="text-3xl font-bold">Shopping List</h1>
        <DragDropContext
          onDragEnd={handleDragDrop}
        >
          {typeof window !== "undefined" ? (
            <Droppable droppableId="shoppingDroppable" type="group">
              {(provided) => (
                <div
                  className="flex flex-col gap-5 border p-5 bg-cyan-200"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {shop.map((shop, index) => (
                    <Draggable
                      key={index}
                      draggableId={`${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                        className="bg-teal-400"
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <EachShop store={shop} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ) : null}
        </DragDropContext>
      </div>
    </>
  );
}
