"use client"

import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { setSelectionId } from "@/lib/slices/selectionSlice";
import { RootState } from "@/lib/store";
import ElementBox from "@/components/ElementBox";
import ToolBar from "@/components/ToolBar";
import Inspector from "@/components/Inspector";

export default function Home() {
  const elements = useSelector( (state: RootState)  => state.elements.elements);
  // const [delectCanvas, setDetectCanvas] = useState<boolean | null>(false);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center">

      <div className="left-pane w-1/4 h-185">

        <ToolBar />
      </div>
      <div 
        className={`z-2 mx-3 mt-2 h-185  w-185 grid-container`} 
        id="bounds" 
        onMouseDown={() => {dispatch(setSelectionId(null))}}
        // onMouseEnter={() => setDetectCanvas(true)}
        // onMouseLeave={() => setDetectCanvas(false)}
      >
        
        {elements.length > 1 && elements.map((e: any, i: number) => (
          <ElementBox key={e?.id} id={e?.id} element={e} />
        ))}
      </div>

      <div className="left-pane w-1/4 h-185">
        <Inspector />
      </div>
    </div>
  );
}
