import React from "react";
import Card from "./Card";
import sdata from "./sdata";

const Netflix =()=>{
    return(
        <Card
        key={sdata[0][4]}
        imglink={sdata[0][0]}
        head={sdata[0][1]}
        link={sdata[0][2]}
        />
    );
}
export default Netflix;