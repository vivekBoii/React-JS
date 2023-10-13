import React, { useState } from "react";

const List=(props)=>{

    const[line,setline]=useState("true");

    const cutit = () => {
        setline("false");
    };

    return( 
        <React.Fragment>
            <li style={{textDecoration : line ? "line-through" : "none"}}>{props.text}</li>
            <button onClick={cutit} >X</button>
        </React.Fragment>
    );
}

export default List;