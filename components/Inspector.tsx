import { RootState } from '@/lib/store';
import React from 'react'
import { CornerUpRight, CornerUpLeft, CornerDownLeft, CornerDownRight } from 'react-feather'

import { useSelector, useDispatch} from 'react-redux'
import { elementUpdate } from '@/lib/slices/elementsSlice';

function Inspector() {

  const selectedId = useSelector((state: RootState) => state.selection.selectionId);
  const dispatch = useDispatch();
  const elements = useSelector((state:RootState) => state.elements.elements);
  const currentElement = elements.find(v => v?.id === selectedId)

  const changeBorder = (position: string, size: number) => {
    dispatch(
        elementUpdate({
            ...currentElement,
            id: selectedId,
            border: {
            ...currentElement?.border,
            borderRadius: [
                position === "topLeft" ? size : currentElement?.border?.borderRadius?.[0],
                position === "topRight" ? size : currentElement?.border?.borderRadius?.[1],
                position === "bottomRight" ? size : currentElement?.border?.borderRadius?.[2],
                position === "bottomLeft" ? size : currentElement?.border?.borderRadius?.[3],
            ],
            },
        })
    );

  }

  
  
  return (
    selectedId != null && (
        <div className='h-screen w-full box-border'>
            <div className="border-section mt-10 mx-5 grid grid-cols-2 gap-4">
                <div 
                    className='hover:opacity-50 cursor-pointer flex gap-2 items-center'
                >
                    <CornerUpRight size={20} />
                    <input placeholder='0' type="number" min={0} max={99} className='w-10 text-center'/>
                </div >

                <div 
                    className='hover:opacity-50 cursor-pointer flex gap-2 items-center'
                >
                    <CornerUpLeft size={20} />
                    <input placeholder='0' type="number" min={0} max={99} className='w-10 text-center'/>
                </div >

                <div 
                    className='hover:opacity-50 cursor-pointer flex gap-2 items-center'
                >
                    <CornerDownRight size={20} />
                    <input placeholder='0' type="number" min={0} max={99} className='w-10 text-center'/>
                </div >

                <div 
                    className='hover:opacity-50 cursor-pointer flex gap-2 items-center'
                >
                    <CornerDownLeft size={20} />
                    <input placeholder='0' type="number" min={0} max={99} className='w-10 text-center'/>
                </div >
            </div>
        </div>
    )
  )
}

export default Inspector