import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { ToDoBanner } from './ToDoBannerFile'
import { ToDoRow } from './ToDoRowFile';
import { VisibilityControl } from './VisibilityControl';
import { ToDoCreator } from './ToDoCreator';
import 'bootstrap/dist/css/bootstrap.css';

//**** () => localStorage.setItem("storedTodos", JSON.stringify(this.state)) **** Generic template

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
      ],
      showCompleted: true
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
        //callback to outside function
        callback={this.toggleToDoFunction}
      />
    );

  // the toggleToDoFunction is the callback function of the <ToDoRow> component.
  // This function receives the value or object that is passed into the callack property of <ToDoRow>
  // This passed data is being called "myToggledItem"
  // The gist of the function is to flip the "done" property of the todo item from false to true OR true to false depending on what it's current state is
  //  When setState() is invoked, React will make a new object with the changes.  Under the hood React will compare the new object with the DOM version of the object.  If there is a difference between those 2 objects then the DOM will get re-drawn (NOT a reload, faster) and then we see the changes.
  toggleToDoFunction = (myToggledItem) => this.setState({
    todoItems: this.state.todoItems.map(
      x => x.action === myToggledItem.action ? { ...x, done: !x.done } : x//is the action we are targeting the one that was changed? if so return the done property to what it NOT is. If not, just return the action since it's looking through all of them (...x)
    )
  }, () => localStorage.setItem("storedTodos", JSON.stringify(this.state)));

  //  The createNewTodoCallback method below is the callback for the ToDoCreator component
  //  The "newToDo" parameter passed into the createNewTodoCallback method below comes from where the callback it initiated from (created on the fly) - which is in the createNewTodo method of the ToDoCreator Component
  createNewToDoCallback = (newToDo) => {
    //  The if block below checks if the newly created todo item is NOT already in the list of todos.  If it is NOT already in the list then it adds it as below.  If it is in the list already there is no else block so nothing happens - this is not to user friendly but.... :)
    if (!this.state.todoItems.find(x => x.action === this.state.newToDo)) {
      this.setState({
        todoItems: [
          ...this.state.todoItems, { action: newToDo, done: false }
          // By default every new todo should not be done- in other words it's done property should have a value of false
          // ...this.state.todoItems brings in all of the todoItems from state and ,{action: newToDo, done: false} adds out new to do item
        ]},
       () => localStorage.setItem("storedTodos", JSON.stringify(this.state))
      );//end of set state
    }//end of if block
  }

  //  The componentDidMount method below is a built in react method to handle logic for when the app "mounts" or "loads"
  //  The localStorage object is a React built in object that allows persistent local storage much like how cookies work
  //  localStorage reference: https://programmingwithmosh.com/react/localstorage-react/
  componentDidMount = () => {
    let storedData = localStorage.getItem("storedTodos")
    this.setState(
      storedData != null ? JSON.parse(storedData) : {
        userName: "Billy Bob", //this is essentially the default view since we don't have any local storage until we add some.
        todoItems: [
          { action: "Move to firepit", done: false },
        ],
        showCompleted: true
      }
    );
  }

  render = () =>
    <div>
      {/* Features 1 & 2 */}
      {/* Below is refered to as a React Stub */}
      <ToDoBanner
        userName={this.state.userName}
        todoItems={this.state.todoItems}
      />

      {/* Feature 5A */}
      <ToDoCreator
        callback={this.createNewToDoCallback}
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

      <div className="bg-secondary text-white text-center p-2">
        {/* Feature 8 */}
        <VisibilityControl
          toggleVisibility="Completed Tasks"
          isChecked={this.state.showCompleted}
          //callback with function declared
          callback={
            x => this.setState({
              showCompleted: x
            })}
        />
      </div>
      {/* Features 6 & 7 */}
      {/* The BOTTOM table (coded below) is only for items where the "done" property is TRUE*/}
      {/* {if showCompleted is true AND if everything is the table is formatted correctly, it'll display } */}
      {this.state.showCompleted &&
        <table className="table table-striped table-border">
          <thead>
            <th>Description</th>
            <th>Done</th>
          </thead>
          <tbody>
            {this.todoTableRowsFunction(true)} {/*display only items where done is false*/}
          </tbody>
        </table>
      }
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
