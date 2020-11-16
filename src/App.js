import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
//import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

/*const StyledButton = styled.button`
background-color:  ${props =>props.alt ? 'red' : 'blue'};
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
color : yellow;
&:hover {
background-color: ${props =>props.alt ? 'pink' : 'brown'};
  color:black;
`;*/

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
  /*  const style = {
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
*/
    let persons = null;


let btnClass = [classes.button];



    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}> <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              
              changed={(event) => this.nameChangedHandler(event, person.id)} />
              </ErrorBoundary>
          })}
        </div>
      );
    /*  style.backgroundColor ='red';
      style[':hover'] ={
        backgroundColor: 'green',
        color:'black'
      }*/

      btnClass.push(classes.Red);
    }

    const assingedClasses =[];
    if (this.state.persons.length <=2) {
      assingedClasses.push(classes.red);
    }

    if (this.state.persons.length <=1) {
      assingedClasses.push(classes.bold);
    }

    if (this.state.persons.length <=0) {
      assingedClasses.push(classes.big);
    }

    return (
     
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assingedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass.join(' ')}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;