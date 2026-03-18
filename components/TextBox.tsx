import React, { use, useEffect, useState } from "react";
import { DraggableData, Rnd } from "react-rnd";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/lib/store";
import { setSelectionId } from "@/lib/slices/selectionSlice";
import { updateTextBox } from "@/lib/slices/elementsSlice";

export default function TextBox({id, element} : any) {

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

  const sampleElement = useSelector( (state: RootState) => state.elements.textBoxes)[0];

  const selectionId = useSelector( (state: RootState) => state.selection.selectionId);

  const isSelected = selectionId === id && selectionId > 0

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
          dispatch(updateTextBox({
            ...sampleElement,
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
          dispatch(updateTextBox({
            ...sampleElement,
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

        <div 
          className="cursor-pointer w-full h-full" 
          style={{
            background: background,
            borderWidth: border.isEnabled && border?.borderWidth,
            borderStyle: border.isEnabled && border?.borderStyle,
            borderColor: border.isEnabled && border?.borderColor,
            borderRadius: border.isEnabled && border?.borderRadius
          }}
        ></div>
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