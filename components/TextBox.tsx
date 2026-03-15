import React, { use, useState } from "react";
import { Rnd } from "react-rnd";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/lib/store";
import { setSelectionId } from "@/lib/slices/selectionSlice";

export default function TextBox({id, x, y, width, height}: {id: number | undefined, x: number, y: number, width: number, height: number}) {

  const [gridVisible, setGridVisible] = useState(false);
  const dispatch = useDispatch();

  const selectionId = useSelector( (state: RootState) => state.selection.selectionId);

  let isSelected = selectionId === id && selectionId != undefined;
  return (
    <div>

      {gridVisible && <div className="grid-overlay"></div>}

      <Rnd
        default={{
          x: x,
          y: y,
          width: width,
          height: height
        }}
        bounds="#bounds"
        dragGrid={[20,20]}
        resizeGrid={[20,20]}
        onDragStart={() => setGridVisible(true)}
        onDragStop={() => setGridVisible(false)}
        onResizeStart={() => {setGridVisible(true)}}
        onResizeStop={() => setGridVisible(false)}

        
        onMouseDown={(e) => {e.stopPropagation(); dispatch(setSelectionId(id))} }
        resizeHandleStyles={ isSelected ? {
          bottomRight: handleStyle,
          bottomLeft: handleStyle,
          topRight: handleStyle,
          topLeft: handleStyle
        } : {}}
        className={isSelected ? "border border-blue-400 p-0.5 border-dashed" : ""}
      >

        <div className="rounded-xl bg-amber-400 cursor-pointer w-full h-full"></div>
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