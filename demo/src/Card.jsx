import React from "react";

function Card(props){
    // console.log(props);
    return(
        <React.Fragment>
            <div className="container">
                <img src={props.imglink} />
                <h2>{props.head}</h2>
                <a className="Btn" href={props.link}>
                    <button >Watch Now</button>
                </a>
            </div>
        </React.Fragment>
    )
}

export default Card;
