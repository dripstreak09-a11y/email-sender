"use client"

import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { setSelectionId } from "@/lib/slices/selectionSlice";
import { RootState } from "@/lib/store";
import TextBox from "@/components/TextBox";

export default function Home() {
  const textBoxes = useSelector( (state: RootState)  => state.elements.textBoxes);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center">
      <div className={`m-3 h-185 w-150 grid-container`} id="bounds" onMouseDown={() => {dispatch(setSelectionId(undefined))}}>
        
        {textBoxes.map((e: any, i: number) => (
          <TextBox key={i} id={e?.id} x={e?.x} y={e?.y} width={e?.width} height={e?.height} />
        ))}

        

        
      </div>
    </div>
  );
}
