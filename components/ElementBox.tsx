import React, { use, useEffect, useState } from "react";
import { DraggableData, Rnd } from "react-rnd";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/lib/store";
import { setSelectionId } from "@/lib/slices/selectionSlice";
import { elementUpdate} from "@/lib/slices/elementsSlice";
import TextBox from "./TextBox";

export default function ElementBox({id, element} : any) {

  const {
    width, 
    height,
    x,
    y, 
    border,
    background
  } = element;

  const [gridVisible, setGridVisible] = useState(false);
  const dispatch = useDispatch();

  const elements = useSelector((state:RootState) => state.elements.elements)

  const selectionId = useSelector( (state: RootState) => state.selection.selectionId);

  const isSelected = selectionId === id;

  
  const currentElement = elements.find(v => v?.id == id);

  return (
    <div>

      {gridVisible && <div className="grid-overlay"></div>}

      <Rnd
        size={{ width, height }}
        position={{ x, y }}
        bounds="#bounds"
        dragGrid={[20,20]}
        resizeGrid={[20,20]}
        onDragStart={() => setGridVisible(true)}
        onDragStop={(e, d) => {
          setGridVisible(false)
          // update text box
          dispatch(elementUpdate({
            ...currentElement,
            id,
            x: d.x,
            y: d.y,
            width: d.node.offsetWidth,
            height: d.node.offsetHeight
          }))
        
        }}
        
        onResizeStart={() => {setGridVisible(true)}}
        onResizeStop={(e, direction, ref, delta, position) => {
          setGridVisible(false)
          // update text box
          dispatch(elementUpdate({
            ...currentElement,
            id,
            x: position.x,
            y: position.y,
            width: ref.offsetWidth,
            height: ref.offsetHeight
          }))

        }}

        
        onMouseDown={(e) => {e.stopPropagation(); dispatch(setSelectionId(id))} }
        resizeHandleStyles={ isSelected ? {
          bottomRight: handleStyle,
          bottomLeft: handleStyle,
          topRight: handleStyle,
          topLeft: handleStyle
        } : {}}
        className={isSelected ? "border border-blue-400 p-0.5 border-dashed" : ""}
      >

        <TextBox background={background} border={border}/>
      </Rnd>
    </div>
  );
}

const handleStyle = {
  width: "10px",
  height: "10px",
  background: "white",
  border: "2px solid #3b82f6",
  borderRadius: "50%",
};