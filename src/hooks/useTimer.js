import { useEffect, useState } from "react";

export const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [input, setInput] = useState("");

  const min = input * 60;
  const onChangeHandler = (val) => {
    setInput(val);
  };
  const start = () => {
    setIsRunning(true);
  };
  const addHandler = ( ) => {
  setSeconds(min)
  setInput('')
  }

  const stop = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      isRunning && setSeconds((state) => (state >= 1 ? state - 1 : 0));
    }, 1000);


    return () => {
      clearInterval(timer);
    };
  
  }, [isRunning]);
  const restart = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return {
    onChangeHandler,
    isRunning,
    start,
    stop,
    seconds,
    input,
    setInput,
    restart,
    addHandler
  };
};
