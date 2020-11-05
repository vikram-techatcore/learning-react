import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons: [
      { name: 'vikram', age: 23},
      { name: 'vijay', age: 24},
      { name: 'satyam', age: 22},
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>THE BASIC REACT APP</h1>
        <p>IT IS RELLY WORKING</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>my hobbies : playing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
