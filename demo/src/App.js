import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Heading from './heading';
// import List from './List';

// netflix---------------------------------------
import Card from './Card';
import sdata  from './sdata';

// function App(){
//   return(
//     <React.Fragment>
//     <h1>Top 5 netflix Series in 2023</h1>
//     <div className='parent'>
//       {/* {sdata.map(ncard)} */}
//       {sdata.map(function ncard(val){
//         return(
//         <Card
//           key={val[4]}
//           imglink={val[0]}
//           head={val[1]}
//           link={val[2]}
//         />
//         )
//       })}
//     </div>
//   </React.Fragment>
//   )
// }

// --------------------------if else--------------------------

import Netflix from './Netflix'

const favseries="netflix";

const Poll=()=>{
  if(favseries==="netflix"){
    return <Netflix/>;
  }
  else{
    
  }
};
  
function App(){
  return(
    <React.Fragment>
    <h1>Top 5 netflix Series in 2023</h1>
    <div className='parent'>
    <Poll/>
    </div>
  </React.Fragment>
  )
}

// function App(){
//   return(
//     <React.Fragment>
//       <Heading></Heading>
//       <List></List>
//     </React.Fragment>
//   );
// }

// inbuilt
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
