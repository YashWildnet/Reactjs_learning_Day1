import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import PropsExample from './App';


// class App extends React.Component {
 
//   state = { inputValue: '' };

//   render() {
//       return (
//           <div>
//               <form>
//                   <label> Enter text </label>
//                   <input type="text"
//                       value={this.state.inputValue}
//                       onChange={(e) => this.setState(
//                           { inputValue: e.target.value })} />
//               </form>
//               <br />
//               <div>
//                   Entered Value: {this.state.inputValue}
//               </div>
//           </div>
//       );
//   }
// }

// class App extends React.Component {
 
//   state = { inputValue: '' };
//   onFormsubmit=(event)=>{
//     event.preventDefault();
//     this.setState({inputValue:'HelloWorld'})
//   }

//   render() {
//       return (
//           <div>
//               <form onSubmit={this.onFormsubmit}>
//                 <label>
//                   Enter Your Name
//                 </label>
//                 <input value={this.state.inputValue} onChange={(e)=>this.setState({inputValue:e.target.value})}/>
//                 <input type='submit' value={"Submit"}/>
                  
//               </form>
//               <br />
//               <div>
//                   Entered Value: {this.state.inputValue}
//               </div>
//           </div>
//       );
//   }
// }

class App extends React.Component {
 
  state = { NameValue: '' ,
            EmailValue:''};
  onFormsubmit=(event)=>{
    event.preventDefault();
    this.setState({NameValue:'Thankyou for Submitting',
                   EmailValue:'abc@gmail'});
  };

  render() {
      return (
          <div 
          style={{
            margin: "160px 450px auto 450px ",
            padding:"15px auto",
            paddingTop:"15px",
            paddingBottom:"15px",
            textAlign: "center",
            border:"1px solid white",
            borderRadius:'20px'
        }}
        >
              <form onSubmit={this.onFormsubmit}>
                <label>
                   UserName
                </label>
                <input  type='text' value={this.state.NameValue}  onChange={(e)=>this.setState({NameValue:e.target.value})}/>
                <br/>
                <br/>
                <label>
                  UserEmail
                </label>
                <input type='email' value={this.state.EmailValue}  onChange={(e)=>this.setState({EmailValue:e.target.value})}/>
                <br/>
                <br/>
                <label>Password</label>
                <input type='password'></input>
                <br/>
                <br/>
                <input type='submit' value={"Submit"}/>
                  
              </form>
              <br />
              <label>Entered Value:</label>
              <div
              style={{
                color:"white"
              }} 
              >
                   {this.state.NameValue}
              </div>
          </div>
      );
  }
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <PropsExample /> */}
   <App/> 
  </React.StrictMode>
  // <App />

);

	