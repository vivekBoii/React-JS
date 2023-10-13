import React from 'react'
import { CardComp } from './CardComp'
import "./Card.css"

export const Card = () => {
  return (
    <React.Fragment>
        <h1 className='text-center w-[100vw]' >Welcome To My Website</h1>
        <div className='flex items-center justify-around h-[80vh] w-[100vw]'>
            <CardComp/>
            <CardComp/>
            <CardComp/>
        </div>
    </React.Fragment>
  )
}
