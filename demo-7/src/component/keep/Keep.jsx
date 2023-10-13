import React, { useState, useRef } from 'react'
import { Navbar } from './Navbar'
import "./Keep.css"

export const Keep = () => {
    const [preh, nowh] = useState(false);
    const [prelist, nowlist] = useState({
        title: "",
        point: "",
    });
    const [predata, nowdata] = useState([])

    const changes = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)

        const { name, value } = event.target;
        nowlist((prevalue) => {
            console.log(prevalue);
            return {
                ...prevalue,
                [name]: value,
            }
        })
    }

    const savelist = () => {
        console.log("clicked");
        console.log(prelist);
        nowdata((prevfield) => {
            return [...prevfield, prelist];
        })
        console.log(predata);
    }

    const dellist=(event)=>{
        console.log("deleted");
        let a=event.target.id;
        nowdata((prevfield) => {
            
        }); 
    }

    return (
        <React.Fragment>
            <Navbar />
            <div className='note flex justify-center'>
                <div className='relative flex flex-col'>
                    {preh && <input className='bg-gray w-[600px] h-[50px] p-8' placeholder='Title' onDoubleClick={() => { nowh(false) }}
                        onChange={changes}
                        name='title'
                        value={prelist.title}
                    />}
                    <input className='bg-gray w-[600px] h-[100px] p-8' placeholder='write a note . . . .' onDoubleClick={() => { nowh(!preh) }}
                        onChange={changes}
                        name='point'
                        value={prelist.point}
                    />
                    <button className='bg-green-500 absolute right-[-10px] bottom-[-10px]' onClick={savelist} >+</button>
                </div>
            </div>
            <ul className='grid grid-cols-3 gap-[50px] justify-around mt-[50px] pl-[40px] pr-[40px]' >
                {
                    predata && predata.map((values, index) => {
                        return (
                            <React.Fragment>
                                <li id={`li-${index}`}className='relative'>
                                    <div className='bg-[#3B3B3B] w-[400px] h-[30px] p-8'>{values.title}</div>
                                    <div className='bg-[#3B3B3b] w-[400px] h-[80px] p-8'>{values.point}</div>
                                    <button id={index} className='bg-red-500 absolute right-[80px] bottom-[-10px]' onClick={dellist} >X</button>
                                </li>
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    )
}
