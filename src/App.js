import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {ToDoBanner} from './ToDoBannerFile'
import 'bootstrap/dist/css/bootstrap.css';

// The App class below is the default Compnent for out todo app
export default class App extends Component {

  //  Above we have created a class called App the extends the functionality of the Component class

  //  The export keyword above makes the class available for use outside of the JS file where it is created

  // The constructor method below will run by default when the App Component loads

  constructor() {
    super(); //super method is a built in React method that is generally needed to pass data

    //  React components have a special property called "state".  The "state" is used to define the state of data (props)
    this.state = {
      userName: "Ryan",
      todoItems: [
        { action: "Move to firepit", done: false },
        { action: "Fight God", done: false },
        { action: "Eat steak", done: true },
        { action: "Tax evasion", done: true },
        { action: "Learn to do a backflip", done: false }
      ]
    }

  }//end of constructor

//We defined the class in it's own file

  render = () =>
    <div>
      {/* Features 1 & 2 */}
      {/**Below is refered to as a React Stub/ */}
      <ToDoBanner  
        userName = {this.state.userName}
        todoItems = {this.state.todoItems}
      />
    </div>

}//end of app component

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
