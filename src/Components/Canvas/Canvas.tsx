import React from "react";
import "./Canvas.css";
import { Stage, Layer, Rect, Circle } from "react-konva";

type shape = {
  type: string;
  id: number;
  x: number;
  y: number;
  isDragging: boolean;
};
const shapes: shape[] = [
  {
    type: "circle",
    id: 1,
    x: 30,
    y: 20,
    isDragging: false,
  },
  {
    type: "rectangle",
    id: 2,
    x: 100,
    y: 200,
    isDragging: false,
  },
];
const CanvasComponent = () => {
  const [shapesState, setShapesState] = React.useState(shapes);
  const handleDragStart = (e: any) => {
    console.log("Drag start");
    const id = e.target.id();
    console.log(id);
    setShapesState(
      shapesState.map((shape) => {
        return {
          ...shape,
          isDragging: shape.id.toString() === id,
        };
      })
    );
  };
  const handleDragEnd = (e: any) => {
    console.log("Drag end");
    setShapesState(
      shapesState.map((shape) => {
        return {
          ...shape,
          isDragging: false,
        };
      })
    );
  };
  return (
    <div className="canvas">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {shapesState.map((shape: shape) => {
            const { id, x, y, isDragging, type } = shape;
            if (type === "rectangle") {
              return (
                <Rect
                  x={x}
                  y={y}
                  width={100}
                  height={100}
                  fill="red"
                  shadowBlur={10}
                  key={id}
                  draggable
                  //   onDragStart={handleDragStart}
                  //   onDragEnd={handleDragEnd}
                  id={id.toString()}
                />
              );
            } else if (type === "circle") {
              return (
                <Circle
                  x={x}
                  y={y}
                  radius={50}
                  fill="green"
                  key={id}
                  draggable
                  id={id.toString()}
                />
              );
            }
          })}
        </Layer>
      </Stage>
    </div>
  );
};
export default CanvasComponent;
