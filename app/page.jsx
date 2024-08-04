'use client'

import Image from "next/image";

// redux
import { useSelector, useDispatch } from "react-redux";
// actions
import { increment,
         decrement,
         incrementByAmount,
          reset } from "./globalRedux/features/counter/counterSlice";
import { useState } from "react";

export default function Home() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }



  return (
    <section className="flex flex-col gap-10" >
      <h1 className="text-4xl">{count}</h1>

      <div className="flex gap-5" >
        <button className="bg-green-500 px-10 py-2"
                onClick={() => { dispatch(increment()) }} >+</button>
        <button className="bg-red-500 px-10 py-2"
                onClick={() => { dispatch(decrement()) }} >-</button>
      </div>

      <div className="flex gap-5">
        <input type="text" className="text-black"
                value={incrementAmount}
                onChange={(e) => {setIncrementAmount(e.target.value)}} />

        <button className="bg-yellow-500 px-10 py-2"
                onClick={() => { dispatch(incrementByAmount(addValue)) }} >Add value</button>
      </div>

      <button className="bg-yellow-800 px-10 py-2"
                onClick={() => { dispatch(resetAll) }} >reset</button>

    </section>
    
  );
}      
