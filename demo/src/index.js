import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import createRoot  from 'react-dom';
import App from './App';
import './index.css';

// ReactDOM.render(
//   <h1>Vivek Boii</h1> ,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   [
//     <h1>Vivek Boii</h1>,
//     <p>This is Vivek</p>
//   ],
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <div>
//     <h1>Vivek Boii</h1>
//     <p>This is Vivek</p>
//   </div>
//   ,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <React.Fragment>
//     <h1>Vivek Boii</h1>
//     <p>This is Vivek</p>
//   </React.Fragment>
//   ,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <>               -------- not working
//     <h1>Vivek Boii</h1>
//     <p>This is Vivek</p>
//   </>
//   ,
//   document.getElementById('root')
// );

// const name="Vivek";
// const sname="Yadav";

// ReactDOM.render(
//   <React.Fragment>
//     <h1>{name} Boii</h1>
//     <h1>{name} {sname}</h1>
//     <h1>{`${name} ${sname}`}</h1>
//     <p>This is {name}</p>
//     <p>My lucky number is {Math.ceil(Math.random()*10)}</p>
//   </React.Fragment>
//   ,
//   document.getElementById('root')
// );

// const date=new Date();

// ReactDOM.render(
//   <React.Fragment>
//     <p>{`Today Date is ${date.toDateString().slice(4)}`}</p>
//     <p>{`Today Date is ${date.toLocaleDateString()}`}</p>
//     <p>{`Today Time is ${date.toTimeString().slice(0,9)}`}</p>
//     <p>{`Today Time is ${date.toLocaleTimeString()}`}</p>
//   </React.Fragment>
//   ,
//   document.getElementById('root')
// );

// attribute 
// inline CSS

// const Hstyle={
//   textAlign:"center",
//   color:"orange",
//   fontSize:"4em",
//   margin:"30px"
// }
// createRoot.render(
//   <React.Fragment>
//     <h3 className='Heading' contentEditable="true" style={Hstyle} >Vivek Boii</h3>
//     <img id='one' src='https://www.looper.com/img/gallery/30-most-popular-boy-anime-characters-ranked-worst-to-best/l-intro-1648715126.jpg' alt='One-piece' />
//   </React.Fragment>
//   ,
//   document.getElementById('root')
// );


// --------------------------------Greeting Page-------------------------------


// const Time_now=new Date().getHours();
// console.log(Time_now);
// const greeting="";

// if(Time_now>=5 && Time_now<=12){
//     greeting="Good Morning";
// }
// else if(Time_now>=12 && Time_now<=19){
//     greeting="Good Evening";
// }
// else{
//     greeting="Good Night";
// }

// // styling

// const Parent={
//   height: "100vh",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   backgroundColor: "#aee9e1ff",
// }

// const container =
// {
//   backgroundColor: "#ffe7c5ff",
//   padding: "20px",
//   borderRadius: "20px"
// }

// const First =
// {
//   color: "rgb(252, 146, 164)",
//   fontSize: "3em"
// }

// const Second = {
//   color: "green",
//   fontSize: "3em"
// }

// createRoot.render(
//     <React.Fragment>
//     <div className='Parent' style={Parent} >
//         <div className='container' style={container} >
//             <span className='First' style={First} >Hello Sir , </span>
//             <span className='Second' style={Second} >{greeting}</span>
//         </div>
//     </div>
//     </React.Fragment>
//     ,
//     document.getElementById('root')
// );



// Component

// createRoot.render(
//       <React.Fragment>
//         <Heading></Heading>
//         <List></List>
//       </React.Fragment>
//       ,
//       document.getElementById('root')
// );

// app 

// createRoot.render(
//   <App></App>
//   ,
//   document.getElementById('root')
// );

// netflix website ------------------------------------

// import Card from './Card';
// import sdata  from './sdata';

// function ncard(val){
//   return(
//     <Card
        // key={val[3]} 
//       imglink={val[0]}
//       head={val[1]}
//       link={val[2]}
//     />
//   )
// }

createRoot.render(<App/>,document.getElementById('root'));


