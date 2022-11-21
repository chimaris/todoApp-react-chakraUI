import React, { createContext, useEffect } from 'react'
import { useState } from 'react';

export const VoteContext = createContext();

const VoteProvider = ({ children }) => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {

  }, [total]);


  const leftWidth = (Number(left) / Number(total)) * 100;
  const rightWidth = (Number(right) / Number(total)) * 100;

  const leftHandler = () => {
    setLeft(prev => prev + 1);
    setTotal(prev => prev + 1);
    console.log(left);
    console.log(total);
  }

  const rightHandler = () => {
    setRight(prev => prev + 1);
    setTotal(prev => prev + 1);

  }


  const voteStates = {
    left: left,
    total: total,
    onLeft: leftHandler,
    leftWidth: leftWidth,
    right: right,
    onRight: rightHandler,
    rightWidth: rightWidth,
    // python,
    // cSharp,
    // kotlin,
  }
  return (
    <VoteContext.Provider value={voteStates}>{children}</VoteContext.Provider>
  )
}

export default VoteProvider