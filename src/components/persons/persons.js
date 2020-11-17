import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {

// static getDerivedStateFromProps(props, state){
//   console.log('[Person.js] getDerivedStateFromProps ');
//   return state;
// }

componentWillReceiveProps(props){
  console.log('[persons.js] componentWillReceiveProps', props );
}

shouldComponentUpdate(nextProps, nextState){
  console.log('[persons.js] shouldComponentUpdate');
  return true;
}

getSnapshotBeforeUpdate(prevProps, prevState){
  console.log('[Person.js] getSnapshotBeforeUpdate');
  return {message: 'snapshot'};
}

componentDidUpdate(prevProps, prevState,snapshot){
  console.log('[Person.js] componentDidUpdate');
  console.log(snapshot);
}


  render(){
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  };
 
};

export default Persons;
