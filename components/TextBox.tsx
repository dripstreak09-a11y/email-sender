import React, { useRef } from "react";
import Draggable from "react-draggable";

export default function TextBox() {
  const nodeRef = useRef(null);

  return (
    <div className="z-10">
        <div className="grid-overlay"></div>
      <Draggable nodeRef={nodeRef} grid={[20, 20]} bounds="#bounds">
        <div
          ref={nodeRef}
          className="text-box rounded-xl w-2/4 h-20 bg-amber-400 cursor-pointer"
        >
        </div>
      </Draggable>
    </div>
  );
}