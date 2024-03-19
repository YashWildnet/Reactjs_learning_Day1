// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import React from 'react';
//**Method 1 Directly Render the array into the list**

// const numbers=[1,2,3,4,5];

// const updatednums=numbers.map((number=>{
//   return <li>{number}</li>;
// }));

//**Method 2 Use Props for Dynamically Adding content into the list from Backend**

// function Navmenu(props){
//   const list=props.menuitems;

//   const updatednums=list.map((listelement=>{
//     return <li key={listelement.toString()}>{listelement}</li>
//   }))
//   return (
//     <ul>
//       {updatednums}
//     </ul>
//   )
// }

// const menuItems = ['Math','English','Science','History','Hindi'];

//***Form in React***

// class app extends React.Component{

//   onInputChange(event) {
//     console.log(event.target.value);
// }
// render(){
//   return(
//     <div>
//       <form>
//         <label>Enter Input</label>
//         <input type='text' onChange={this.onInputChange}></input>
//       </form>
//     </div>
//   )
// }
function Example(props){
  return (
    <h1>{props.data}</h1>
  )
}
const PropsExample=()=>{
  const [change, setChange] = useState(false);

  return (
    <div>

      <button onClick={()=>setChange(!change)}>Click Here!</button>
      {
        change ? (
          <Example data="Welcome"/>
        ) :
        (<Example data="Goodbye"/>)
      }


    </div>
  )
}
function App() {
  return (
    // <ol>{updatednums}</ol>
    // <Navmenu menuitems = {menuItems} />
    <div></div>

  );
}

export default  PropsExample;
