import React, { Component, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

// --------------------- simplified login page---------------------------

const App = () => {


  const [fullname, setfullname] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const greet = (event) => {
    event.preventDefault();
    alert('form sumbited');
  }

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    // const value=event.target.value; 
    // const name = event.target.name;

    const { value, name } = event.target;

    setfullname((preValue) => {
      console.log(preValue);
      // if (name === 'fname') {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   }
      // }
      // else if (name === "lname") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   }
      // }
      // else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone,
      //   }
      // }
      // else if (name === "phone") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value,
      //   }
      // }

      // compressed code 
      return{
        ...preValue,
        [name] : value,
      }
    })
  }

  // -------------------watch video 
  return (
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


// -----------------------login form ------------------------------
// const App=()=>{ 


//   const[pre,after]=useState("");
//   const[pretwo,aftertwo]=useState("");
//   const[name,setname]=useState();

//   const greet=(event)=>{
//     event.preventDefault();
//     setname(pre+" "+pretwo);
//   }

//   const inputEvent=(event)=>{
//     console.log("changed");
//     console.log(event.target.value);
//     // after(event.target.value);
//   }
//   // see the change of value tag after commiting after 

//   const inputEventtwo=(event)=>{
//     console.log("changed");
//     console.log(event.target.value);
//     // aftertwo(event.target.value);
//   }
// // -------------------watch video 
//   return(
//     <React.Fragment>
//     <form onSubmit={greet}>
//       <h1>Hello {name}</h1>
//       <input type='text' placeholder='Enter your  first name' onChange={inputEvent} value={pre}></input>
//       <br/>
//       <input type='text' placeholder='Enter your  first name' onChange={inputEvent} ></input>
//       <br/>
//       <input type='text' placeholder='Enter your last name' onChange={inputEventtwo} value={pretwo}></input>
//       <br/>
//       <input type='text' placeholder='Enter your last name' onChange={inputEventtwo} value={pretwo}></input>
//       <br/>
//       <button type='sumbit' >Sumbit Now</button>
//     </form>
//     </React.Fragment>
//   );
// }


// -----------------------form another method------------------

// const App=()=>{ 

//   const[pre,after]=useState("");
//   const[name,setname]=useState();

//   const greet=()=>{
//     setname(pre);
//   }

//   const inputEvent=(event)=>{
//     console.log("changed");
//     console.log(event.target.value);
//     after(event.target.value);
//   }
// // -------------------watch video 
//   return(
//     <React.Fragment>
//       <h1>Hello {name}</h1>
//       <input type='text' placeholder='Enter your name' value="vivek" ></input>
//       <input type='text' placeholder='Enter your name' defaultValue="vivek" ></input>
//       <input type='text' placeholder='Enter your name' onChange={inputEvent} value={pre}></input>
//       <input type='text' placeholder='Enter your name' onChange={inputEvent} ></input>
//       <button onClick={greet}>Sumbit Now</button>
//       {/* <button type='sumbit' >Sumbit Now</button> */}
//     </React.Fragment>
//   );
// }

// --------------------------form-----------------------------------

// const App=()=>{ 

//   const[pre,after]=useState("");
//   var name;

//   const greet=(event)=>{
//     after(name);
//     after(event.target.value);
//   }

//   const inputEvent=(event)=>{
//     console.log("changed");
//     console.log(event.target.value);
//     name=event.target.value;
//   }
// // -------------------watch video 
//   return(
//     <React.Fragment>
//       <h1>Hello {pre}</h1>
//       <input type='text' placeholder='Enter your name' value="vivek" ></input>
//       <input type='text' placeholder='Enter your name' defaultValue="vivek" ></input>
//       <input type='text' placeholder='Enter your name' onChange={inputEvent}></input>
//       <input type='text' placeholder='Enter your name' onChange={greet}></input>
//       <button type='sumbit' onClick={greet}>Sumbit Now</button>
//     </React.Fragment>
//   );
// }


// ------------------------events---------------------------------


// const App=()=>{

//   const[bg,setBg]=useState();
//   const[name,setName]=useState("hello");

//   const bgChange=()=>{
//     console.log("clicked");
//     let newbg="#ee4da3ff";
//     setBg(newbg);
//     setName("Omfo")
//   };

//   const ctext=()=>{
//     let newbg="#f6de1eff";
//     setBg(newbg);
//     setName("Ouch!!")
//   };

//   return(
//     <React.Fragment>
//       <div style={{ backgroundColor: bg }}>
//         <button onClick={bgChange} onDoubleClick={ctext}>{name}</button>
//       </div>
//     </React.Fragment>
//   );
// }


// ----------------------real time time display -------------------

// const App=()=>{

//   let time=new Date().toLocaleTimeString();

//   const[curtime,settime]=useState(time);

//   const uptime=()=>{
//     time=new Date().toLocaleTimeString();
//     settime(time);
//   }

//   setInterval(uptime,1000);

//   return(
//     <React.Fragment>
//       {curtime}
//     </React.Fragment>
//   )
// }


// ------------------build in--------------------

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
