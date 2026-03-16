import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { textBoxCountInc, textBoxCountDec } from '@/lib/slices/elementsSlice';
import { RootState } from '@/lib/store';


function ToolBar() {

  const dispatch = useDispatch();

  const elements = useSelector((state: RootState) => state.elements.textBoxes)

  const selectedId = useSelector((state: RootState) => state.selection.selectionId);
  const prevElement = elements[elements.length - 1];

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
                dispatch(textBoxCountInc({ id: prevElement?.id + 1, x: 0, y: prevElement?.y+100, width: 600, height: 80 }))
            }}
        >
            add element
        </div>

        {/* remove element  */}
        <div 
            className="mt-5 button w-full h-12.5 bg-blue-400 rounded-2xl flex justify-center items-center cursor-pointer hover:opacity-80 text-white font-bold"
            onClick={() => {
                if(selectedId !== null || selectedId !== 0){
                    dispatch(textBoxCountDec(selectedId))
                }
                
            }}
        >
            remove element
        </div>
    </div>
  )
}

export default ToolBar