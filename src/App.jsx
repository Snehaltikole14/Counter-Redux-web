import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  changeByValue,
} from "./slice/counterSlice";


function App() {

 const dispatch = useDispatch();

 return (
   <div>
     <h1 className="text-gray-600 text-center font-bold text-5xl mt-48">
       Counter Application
     </h1>
     <Component />
     <div className="items-center justify-center mx-auto flex gap-6 mt-7">
       <button
         className="border-2 border-black rounded bg-green-600 w-32 h-9 text-white"
         onClick={() => dispatch(increment())}
       >
         Increment
       </button>
       <button
         className="border-2 border-black rounded bg-red-600 w-32 h-9 text-white"
         onClick={() => dispatch(decrement())}
       >
         Decrement
       </button>
       <button
         className="border-2 border-black rounded bg-gray-500 h-9 w-28 text-white"
         onClick={() => dispatch(reset())}
       >
         Reset
       </button>
       <button
         className="border-2 border-black rounded w-32 h-9 text-white bg-black"
         onClick={() => dispatch(changeByValue(3))}
       >
         Increase by 3
       </button>
     </div>
   </div>
 );
}

function Component(){
   const counter = useSelector((state) => state.counter);
   return <h1 className='text-center mt-7 text-3xl font-bold'> Count is :{counter}</h1>
}

export default App
