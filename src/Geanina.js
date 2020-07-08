import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

const heroes = [
  {name: 'Batman', franchise: 'DC'},
  {name: 'Ironman', franchise: 'Marvel'},
  {name: 'Thor', franchise: 'Marvel'},
  {name: 'Superman', franchise: 'DC'}
];

const people = [
  {
    name: 'James',
    age: 31,
  },
  {
    name: 'John',
    age: 45,
  },
  {
    name: 'Paul',
    age: 65,
  },
  {
    name: 'Ringo',
    age: 49,
  },
  {
    name: 'George',
    age: 34,
  }
];

class Geanina extends Component{
  

onClickFilter(){
  console.log(heroes.filter(function(hero){
    return hero.franchise ==='Marvel'
  }))
}

onClickPersons(){
  console.log(people.filter(individ => individ.age<65))
}


 render(){
   return (
     <div>
       <Button onClick={this.onClickFilter}>Filter Marvel</Button>
       <Button onClick={this.onClickPersons}>Filter Persons</Button>
      <div>
      {people.filter(individ => individ.age<65).map(filteredperson => 
        (<li>{filteredperson.name}</li>))}
      </div>

     </div>
   )
 }
}

export default Geanina;