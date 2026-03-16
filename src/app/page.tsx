"use client"

import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { setSelectionId } from "@/lib/slices/selectionSlice";
import { RootState } from "@/lib/store";
import TextBox from "@/components/TextBox";
import ToolBar from "@/components/ToolBar";

export default function Home() {
  const textBoxes = useSelector( (state: RootState)  => state.elements.textBoxes);
  // const [delectCanvas, setDetectCanvas] = useState<boolean | null>(false);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center">

      <div className="left-pane w-1/4 h-185">

        <ToolBar />
      </div>
      <div 
        className={`z-2 m-3 h-185  w-185 grid-container`} 
        id="bounds" 
        onMouseDown={() => {dispatch(setSelectionId(0))}}
        // onMouseEnter={() => setDetectCanvas(true)}
        // onMouseLeave={() => setDetectCanvas(false)}
      >
        
        {textBoxes.map((e: any, i: number) => (
          <TextBox key={e?.id} id={e?.id} x={e?.x} y={e?.y} width={e?.width} height={e?.height} />
        ))}
      </div>

      <div className="left-pane w-1/4 h-185">

      </div>
    </div>
  );
}
