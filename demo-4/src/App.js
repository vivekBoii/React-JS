import React, { useState , useRef} from 'react';
// import logo from './logo.svg';
import './App.css';


const App=()=>{

  const[olditem,newitem]=useState();
  const[items,setitems]=useState([]);

  const Additem=()=>{
    setitems((olditemss)=>{
      return [...olditemss,olditem];
    })
    newitem("");
  };

  const makelist=(event)=>{
    newitem(event.target.value);
  };
  
  const myRef=useRef(null);

  const deleteitem=(props)=>{
    console.log("deleted");
    setitems((olditemss)=>{
      const a2=olditemss.filter((arrele,index)=>{
        console.log(arrele+" "+index+" "+myRef.current.id);
        return  index != myRef.current.id;
      });
      console.log(a2);
      return a2;
    });
  };

  return(
    <React.Fragment>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type='text' placeholder='Add a Item' onChange={makelist} value={olditem}></input>
          <button onClick={Additem} >+</button>
          <ul>
            {/* {olditem} */}
            {items.map((itemval,index)=>{
              return(
                <React.Fragment>
                <button key={index} id={index}   onClick={deleteitem}>X</button>
                <li > {itemval} </li>
                </React.Fragment>
                )
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );

}


// ---------------------build in----------------
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
