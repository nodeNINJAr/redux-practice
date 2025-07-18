import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/features/counter/counterSlice';

const Redux = () => {

// 
const dispatch = useDispatch();
const counter = useSelector((state)=> state.count);
console.log(counter);
// 
const handleIncerment =(v)=>{
     dispatch(increment(v))
}
// 
const handleDecrement =()=>{
     dispatch(decrement())
}

    // 
  return (
    <div className='text-center mt-3'>
        <h1>Counter slice with redux</h1>
         {/*  */}
         <div>{counter}</div>
          <div className='flex justify-center items-center'>
              <button onClick={()=>dispatch(increment(5))} className='border-2 px-3 py-2 bg-amber-200 rounded-2xl mt-3 cursor-pointer'>increment</button>
              <button onClick={()=>dispatch(decrement(2))} className='border-2 px-3 py-2 bg-amber-200 rounded-2xl mt-3 cursor-pointer'>dcrement</button>
          </div>
    </div>
  )
}

export default Redux