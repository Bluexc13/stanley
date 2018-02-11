import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>React-Training</h1>
        <Biography />
        <Grocery />
      </div>
    );
  }
}




class Biography extends Component {
  render() {
    return(
      <div class="profile">
        <img src="https://pro-rankedboost.netdna-ssl.com/wp-content/uploads/2014/09/bronze-rewards-lol.png" style={{width: 130, height: 100}} />
        <p>Name: Jeff Stanley</p>
        <p>Skills: HTML/CSS</p>
      </div>
    );
  }
}




// class Grocery extends Component {
//   render() {
//     return(
//       <div class="grocery">
//       <h3>Grocery List</h3>
//       <ul>
//         <li>Bananas</li>
//         <li>Cookies</li>
//         <li>Ice Cream</li>
//       </ul>
//       </div>
//     );
//   }
// }





// class ClickBtn extends Component {

// handleClick() {
//   alert('Hello I am clicked!');
// }

// render() {
//     return(
//       <div class="button1">
//       <button onClick={this.handleClick.bind(this)}>
//       Click Me!
//       </button>
//       </div>
//     );
//   }
// }




class Grocery extends Component {
constructor() {
    super();
    this.state = {
      todoItems: []
    }
}

handleClick() {
  const todoItems = this.state.todoItems;
  todoItems.push(this.textbox.value);

  this.setState({
    todoItems: todoItems
  });
}

 render() {
    return(
      <div class="todo">
      <input
      type="text"
      ref={textbox => this.textbox = textbox}
      />
      <button onClick={this.handleClick.bind(this)}>
        Add Item
      </button>
      <p>Todo Items</p>
        <ul>
          {this.state.todoItems.map(item => <li>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
