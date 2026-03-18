import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { textBoxCountInc, textBoxCountDec} from '@/lib/slices/elementsSlice';
import { setSelectionId } from '@/lib/slices/selectionSlice';
import { RootState } from '@/lib/store';
import TextBox from './TextBox';


function ToolBar() {

  const dispatch = useDispatch();

  const textboxes = useSelector((state: RootState) => state.elements.textBoxes)

  const sampleElement = textboxes[0];
  const selectedId = useSelector((state: RootState) => state.selection.selectionId);
  const prevElement = textboxes[textboxes.length - 1];

  // delete by key board
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Backspace" || e.key === "Delete") {
                if (selectedId !== null && selectedId !== 0) {
                    dispatch(textBoxCountDec(selectedId));
                }
            }
        };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedId]);

  
  return (
    <div className='w-full h-full p-3 '>
        {/* add element  */}
        <div 
            className="button w-full h-12.5 bg-blue-400 rounded-2xl flex justify-center items-center cursor-pointer hover:opacity-80 text-white font-bold"
            onClick={() => {
                const new_id = prevElement?.id + 1
                dispatch(setSelectionId(new_id));
                dispatch(textBoxCountInc({ ...sampleElement, id: new_id, x: 0, y: prevElement?.y+100, width: 600, height: 80 }))
            }}
        >
            add element
        </div>

        {/* remove element  */}
        <div 
            className="mt-5 button w-full h-12.5 bg-blue-400 rounded-2xl flex justify-center items-center cursor-pointer hover:opacity-80 text-white font-bold"
            onClick={() => {
                if(selectedId !== null || selectedId !== 0){
                    if(textboxes.length > 0){
                        dispatch(textBoxCountDec(selectedId))
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