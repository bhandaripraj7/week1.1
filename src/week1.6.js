/*Exercise 6: Define an array of names and render a list of greetings using JSX. The DOM structure of
 the output should be:
<div><p>Greetings Alice!</p><p>Greetings Bob!</p></div>*/
 import React from 'react';

 function GreetingNames(){
  const names =["Alice","Bob"];
  const GreetingResult = names.map(name => <p>Greetings {name}!</p>)
  return (
    <div> {GreetingResult} </div>
  )
 }
 export default GreetingNames;