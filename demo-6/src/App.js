import React, { Component, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import List from './List';


// const App = () => {
//   return (
//     <React.Fragment>

//       {/* -----------------navbar-------------------------- */ }
//       <p className='text-lg'> bhanu</p>

//     </React.Fragment>
//   );
// }


// --------------------------------------------------------------------

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import List from './List';


const App=()=>{

  const[pre,post]=useState();
  const[prelist,postlist]=useState([]);

  const inputchange=(event)=>{
    post(event.target.value);
  }

  const additem=()=>{
    postlist((previousvalue)=>{
      return[...previousvalue,pre];
    })
    post(" ");
  }

  return(
    <React.Fragment>
      <div>
        <h1>To Do List</h1>
      </div>
      <input type='text' value={pre} placeholder='Enter Task' onChange={inputchange}></input>
      <button onClick={additem}>+</button>
      <ul>
        {prelist.map((val,index)=>{
          return <List key={index} text={val}/>;
        })}
      </ul>
    </React.Fragment>
  );
}


// ------------------------------------------

// import Clock from 'react-clock';
// // import Clock from 'react-digital-clock';

// const App=()=>{
//   return(
//     <React.Fragment>
//       <div style={{color:"black"}}><Clock/></div>
//     </React.Fragment>
//   );
// }

// -------------------project---------------------

// import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove';
// import Button from '@material-ui/core/Button';

// const App=()=>{
//   const[pre,post]=useState(0);

//   const increase=()=>{
//     post(pre+1);
//   };

//   const decrease=()=>{
//     if(pre===0){
//       alert("Number is zero");
//     }
//     else{
//       post(pre-1);
//     }
//   };

//   return(
//     <React.Fragment>
//       <h1>{pre}</h1>
//       <Button onClick={increase}><AddIcon></AddIcon></Button>
//       <Button onClick={decrease}><RemoveIcon></RemoveIcon></Button>
//     </React.Fragment>
//   );
// }


// ------------------------------------------
// className App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
