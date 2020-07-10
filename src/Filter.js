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

const filterpersons = people.filter(individ => individ.age<65).map(filteredperson => 
  (filteredperson.name))

class Filter extends Component{
  

onClickFilter(){
  console.log(heroes.filter(function(hero){
    return hero.franchise ==='Marvel'
  }))
}

onClickPersons(){
  console.log(people.filter(individ => individ.age<65))
}

isNumberPrime(){
  let result; 
  const a = 13;
  for (let i = 2; i < Math.sqrt(a); i++){
    if (a % i ===0){
      result = 'Not prime'; 
    } 
  }
  if (!result) {
    result = 'Number is prime.'; 
  }
  console.log(result);
}

isPalindrom(){
  const a = 1221; 
  let nr = a; 
  let ogl = 0; 
  do {
    ogl = ogl * 10 + Math.trunc(nr % 10);
    nr = Math.trunc(nr/10); 
      console.log('oglindit');
      console.log(ogl);
  } while (nr > 0); 

  console.log(nr);
  console.log(ogl);

  if (a === ogl){
   console.log('palindrom'); 
  } else {
  console.log(' not palindrom'); 
  }
  

}

 render(){
   return (
     <div>
       <Button onClick={this.onClickFilter}>Filter Marvel</Button>
       <Button onClick={this.onClickPersons}>Filter Persons</Button>
       <Button onClick={this.isNumberPrime}>Prime</Button>
       <Button onClick={this.isPalindrom}>Palindrom</Button>
     </div>
   )
 }
}

export default Filter;