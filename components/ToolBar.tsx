import React, {useEffect, useId} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { elementAdd, elementDelete} from '@/lib/slices/elementsSlice';
import { setSelectionId } from '@/lib/slices/selectionSlice';
import { v4 as uuidv4 } from 'uuid';

import { RootState } from '@/lib/store';
import TextBox from './ElementBox';


function ToolBar() {

  const dispatch = useDispatch();
  const new_id = uuidv4();

  const elements = useSelector((state: RootState) => state.elements.elements)

  const sampleElement = elements[0];
  const selectedId = useSelector((state: RootState) => state.selection.selectionId);
  const prevElement = elements[elements.length - 1];

  // delete by key board
    // useEffect(() => {
    //     const handleKeyDown = (e: KeyboardEvent) => {
    //         if (e.key === "Backspace" || e.key === "Delete") {
    //             if (selectedId !== null) {
    //                 dispatch(elementDelete(selectedId));
    //                 dispatch(setSelectionId(null));
    //             }
    //         }
    //     };

    // window.addEventListener("keydown", handleKeyDown);

    // return () => window.removeEventListener("keydown", handleKeyDown);
    // }, [selectedId, dispatch]);

  
  return (
    <div className='w-full h-full p-3 '>
        {/* add element  */}
        <div 
            className="button w-full h-12.5 bg-blue-400 rounded-2xl flex justify-center items-center cursor-pointer hover:opacity-80 text-white font-bold"
            onClick={() => {
                dispatch(setSelectionId(new_id));
                dispatch(elementAdd({ ...sampleElement, id: new_id, x: 0, y: prevElement ? prevElement?.y+100: 100, width: 600, height: 80 }))
            }}
        >
            add element
        </div>

        {/* remove element  */}
        <div 
            className="mt-5 button w-full h-12.5 bg-blue-400 rounded-2xl flex justify-center items-center cursor-pointer hover:opacity-80 text-white font-bold"
            onClick={() => {
                if(selectedId !== null){
                    if(elements.length > 0){
                        dispatch(elementDelete(selectedId))
                        dispatch(setSelectionId(null))
                    }
                    
                }
                
            }}
        >
            remove element
        </div>
    </div>
  )
}

export default ToolBar