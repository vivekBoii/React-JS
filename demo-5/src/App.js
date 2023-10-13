import React, { Component, useState } from 'react';
// import logo from './logo.svg';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './App.css';
import Button from '@material-ui/core/Button';




// -------------------project---------------------
const App=()=>{
  const[pre,post]=useState(0);

  const increase=()=>{
    post(pre+1);
  };

  const decrease=()=>{
    if(pre===0){
      alert("Number is zero");
    }
    else{
      post(pre-1);
    }
  };

  return(
    <React.Fragment>
      <h1>{pre}</h1>
      <Button onClick={increase}><AddIcon/></Button>
      <Button onClick={decrease}><RemoveIcon/></Button>
    </React.Fragment>
  );
}

// class App extends Component {
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
