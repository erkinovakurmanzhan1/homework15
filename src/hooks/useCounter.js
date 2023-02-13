import { useState } from "react";

export const useCounter = ( initialState ) => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(prev => prev + initialState);
  };

  const decrementHandler = () => {
    setCount((prev)=>{
        if (prev > 0) {
            return prev - initialState;
          }
          return prev
    })
  };

  const resetHandler=()=>{
    setCount(0)
  }
  return {
    incrementHandler,
    count,
    decrementHandler,
    resetHandler,
  };
};
