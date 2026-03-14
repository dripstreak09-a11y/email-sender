import React from 'react'
import { useDispatch } from 'react-redux'
import { inc_count, dec_count } from '@/lib/slices/countSlice';
import Image from 'next/image';

function CountOp() {

  const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => dispatch(inc_count())} className='border rounded-xl w-32 h-12.5 text-4xl inline-flex justify-center items-center cursor-pointer hover:opacity-50'> 
          <img src="plus.png" className="inline-block size-8 invert" alt="hello" />  
        </button> 
        &nbsp;

        <button onClick={() => dispatch(dec_count())} className='border rounded-xl w-32 h-12.5 text-4xl inline-flex justify-center items-center cursor-pointer hover:opacity-50'>
          <img src="minus.png" className="inline-block size-8 invert" alt="hello" />  
        </button> &nbsp;
    </div>
  )
}

export default CountOp