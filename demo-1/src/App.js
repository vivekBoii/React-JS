import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// slot machine ------------------------------------------------------

// const SlotM=(prams)=>{

//   if((prams.x===prams.y)&&(prams.y===prams.z)){
//     return(
//       <React.Fragment>
//         <div>
//           <h1>
//             {prams.x} {prams.y} {prams.z}
//           </h1>
//           <h1> This is Matching.</h1>
//           <hr/>
//         </div>
//       </React.Fragment>
//     )
//   }
//   else{
//     return(
//       <React.Fragment>
//         <div>
//           <h1>
//             {prams.x} {prams.y} {prams.z}
//           </h1>
//           <h1> This is not Matching.</h1>
//           <hr/>
//         </div>
//       </React.Fragment>
//     )
//   }
// }


// const App =()=>{
//   return(
//     <React.Fragment>
//       <h1> 🎰 Welcome to<span style ={{fontWieght:"bold"}}> Slot Machine Game</span> 🎰 </h1>
//     <SlotM x="😍" y="😍" z="😍" />
//     <SlotM x="😭" y="😍" z="🤩" />
//     <SlotM x="🤩" y="😍" z="🤩" />
//     </React.Fragment>
//   )
// }

// -------------------------------------build in------------------------

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

// --------------------------click me-----------------------

// const App =()=>{

//   const state = useState();
//   const [count,setCount]=useState(0);

//   const IncNum=()=>{

//     setCount(count+1);
//     return count; not nessesary
//   };

//   return(
//     <React.Fragment>
//       <h1>{count}</h1>
//       <button onClick={IncNum}>Click Me</button>
//     </React.Fragment>
//   )
// }

// ------------------------time click me------------------------

const localTime = new Date().toLocaleTimeString();
function App() {
  const [curtime, setCurTime] = useState(localTime);

  const Time = () => {
    setCurTime(new Date().toLocaleTimeString());
    return curtime;
  };
  return (
    <React.Fragment>
      <h1> {curtime}</h1>
      <button type="button" onClick={Time}>
        Get Time
      </button>
    </React.Fragment>
  );
}

export default App;
