import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

/*class App extends Component {
  state ={
    persons: [
      { name: 'vikram', age: 23},
      { name: 'vijay', age: 24},
      { name: 'satyam', age: 22},
    ]
  }

  switchNameHandler = () => {
    this.setState( {
      persons: [
        { name: 'vikram vishal', age: 22},
        { name: 'vijay kumar', age: 23},
        { name: 'satyam singh', age: 25},
      ]
    } )
  }
*/

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'vikram', age: 23},
      { name: 'vijay', age: 24},
      { name: 'satyam', age: 22},
    ],
    otherState: 'some other value'
  });


  function switchNameHandler() {
    setPersonsState({
      persons: [
        { name: 'vikram vishal', age: 22 },
        { name: 'vijay kumar', age: 23 },
        { name: 'satyam singh', age: 25 },
      ]
    });
  }

return (
      <div className="App">
        <h1>THE BASIC REACT APP</h1>
        <p>IT IS RELLY WORKING</p>
        <button onClick={switchNameHandler}>Full Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>my hobbies : playing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
}


export default App;
