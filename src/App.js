import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { ToDoBanner } from './ToDoBannerFile'
import { ToDoRow } from './ToDoRowFile';
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

  // Feature 3
  // If the todo items "done" property expereinced a change event (ie checking the Mark As Complete box in the UI) then we want to toggle the todo item
  // ---------------- Function to display table rows ----------------
  todoTableRowsFunction = (statusOfTask) =>
    this.state.todoItems.filter(x => x.done === statusOfTask).map(y =>

      < ToDoRow
        key={y.action} //action property of todoItems
        oneMappedItem={y} //entire todoItems
      />
    );

  render = () =>
    <div>
      {/* Features 1 & 2 */}
      {/* Below is refered to as a React Stub */}
      <ToDoBanner
        userName={this.state.userName}
        todoItems={this.state.todoItems}
      />

      {/* Features 3 & 4 */}
      {/* The TOP table (coded below) is only for items where the "done" property is FALSE*/}
      <table className="table table-striped table-border">
        <thead>
          <th>Description</th>
          <th>Done</th>
        </thead>
        <tbody>
          {this.todoTableRowsFunction(false)} {/*display only items where done is false*/}
        </tbody>
      </table>

      <div className="bg-secondary text-white text-center p-2" />
      {/* Features 6 & 7 */}
      {/* The BOTTOM table (coded below) is only for items where the "done" property is TRUE*/}
      <table className="table table-striped table-border">
        <thead>
          <th>Description</th>
          <th>Done</th>
        </thead>
        <tbody>
          {this.todoTableRowsFunction(true)} {/*display only items where done is false*/}
        </tbody>
      </table>
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
