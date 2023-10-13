import React, { useState } from 'react'
import { questions } from './api';
import "./Accordian.css"
import { Myaccordian } from './Myaccordian';

export const Accordian = () => {
    const [data,setdata]=useState(questions);
  return (
    <React.Fragment>
        <h1>Testing</h1>
        {
            data.map((element)=>{
                return <Myaccordian
                    id={element.id}
                    {...element}
                />
            })
        }
    </React.Fragment>
  )
}
