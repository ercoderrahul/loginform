import React, { useState } from "react";

// import { style } from "jade/lib/runtime";
import "../Styles/App.css";
// import "./Login";
// import Login from "./Login";
// import Ragister from "./Ragister";
// import Login from "./Login";
// import Ragister from "./Ragister";

// let isLoggedIn = true;
// let currentTime = new Date(2023 , 2 , 1 , 13).getHours(); 


// function App() {
//   return  <div className="container">
//     {/* Ternary operator */}
//     {/* {isLoggedIn === true ?  <Login/> : <h2> <Ragister/> </h2>} */}
//     {/* AND opertator */}
//     {currentTime > 12 && "why are you working till this time"}
//     </div> 
// }

// function App(){
//   var isLoggedIn = true;
//   return(
//     <div className="App" >
//    { isLoggedIn === true ? <Login/> : <Ragister/>}
//     </div>
//   )
// }

// this is an example of the props and Condisnoal statment and the 
// var userIsRegistered = false ;

// function App(props){
//   return(
//     <div className="container" >
//       <Login isRegistered={userIsRegistered} />
//     </div>
//   )
// }
// Example of the ANd and The Switch operators
// function App() {
//   var isValue = true;
//   let strikeThrough = { textDecoration: "liner-through", color:"red" };
//   return  <h1 style={isValue ? strikeThrough : null} >REACT STATE PRACTICE</h1>
// }

// USESTATE Examples

// function App(){
//   const [count , setCount] = useState(0);

//   function increase(){
//     setCount(count +1)
//   }
//   function decrease(){
//     setCount(count-1)
//   }
//   return( <div className="container">
//     <h1>{count}</h1>
//     <button onClick={increase}> + </button>
//     <button onClick={decrease}> - </button>
//   </div>

//   )
// }

//  show time on click 
//  with the help of use state becouse we want time to click


const App = () => {
  setInterval(updateTime, 1000);

  let now = new Date().toLocaleString();

  const [time, setTime] = useState(now)

  function updateTime() {
    const newTime = new Date().toLocaleString();
    setTime(newTime)
  }
  return (
    <div className="container">
      <h2>hey this is tiem show on click the button</h2>
      <h1>{time}</h1>
      <button onClick={updateTime}> updateTiem </button>
    </div>
  )
}
export default App;