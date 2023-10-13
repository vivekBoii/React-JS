import React, { Component ,useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App=()=>{ 


  const[fullname,setfullname]=useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
  });

  const greet=(event)=>{
    event.preventDefault();
    alert('form sumbited');
  }

  const inputEvent=(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);
    // const value=event.target.value; 
    // const name=event.target.name;

    const {name,value}=event.target;

    setfullname((preValue)=>{
      console.log(preValue);

      return{
        ...preValue,
        [name] : value,
      }
      // if(name === 'fname'){
      //   return{
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   }
      // }
      // else if(name==="lname"){
      //   return{
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   }
      // }
      // else if(name==="email"){
      //   return{
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone,
      //   }
      // }
      // else if(name==="phone"){
      //   return{
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value,
      //   }
      // }

    })
  }
  return(
    <React.Fragment>
    <form onSubmit={greet}>
      <h1>Hello {fullname.fname} {fullname.lname} {fullname.email} {fullname.phone}</h1>
      <input type='text' placeholder='Enter your  first name' onChange={inputEvent} name='fname' 
      value={fullname.fname}
      ></input>
      <input type='text' placeholder='Enter your last name' onChange={inputEvent} name='lname' 
      value={fullname.lname}
      ></input>
      <input type='email' placeholder='Enter your last name' onChange={inputEvent} name='email' 
      value={fullname.email}
      ></input>
      <input type='number' placeholder='Enter your last name' onChange={inputEvent} name='phone' 
      value={fullname.phone}
      ></input>
      <button type='sumbit' >Sumbit Now</button>
    </form>
    </React.Fragment>
  );
}


// build in -------------------------------------- 

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
