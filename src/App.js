import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
background-color: blue;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
color : yellow;
&:hover {
background-color: pink;
  color:black;
`;

class App extends Component {
  state = {
    persons: [
      { id: 'a', name: 'vikram', age: 22 },
      { id: 'b', name: 'vijay', age: 24 },
      { id: 'c', name: 'satyam', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    const style = {
      backgroundColor: 'blue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color : 'yellow',
      ':hover' : {
        backgroundColor: 'pink',
        color:'black'
      }
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor ='red';
      style[':hover'] ={
        backgroundColor: 'green',
        color:'black'
      }
    }

    const classes =[];
    if (this.state.persons.length <=2) {
      classes.push('red');
    }

    if (this.state.persons.length <=1) {
      classes.push('bold');
    }

    if (this.state.persons.length <=0) {
      classes.push('big');
    }

    return (
     
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton
          onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;