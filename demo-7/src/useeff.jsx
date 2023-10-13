// it start when render function is called evertime;
import React, { useState } from 'react'

export const useeff = () => {
    const[num,nownum]=useState(0);
    const[nums,nownums]=useState(0);

  return (
    <React.Fragment>
        <button onClick={()=>{nownum(num+1)}}>Click me {num}</button>
        <button onClick={()=>{nownums(nums+1)}}>Click me {nums}</button>
    </React.Fragment>
  )
}
export default useeff;
