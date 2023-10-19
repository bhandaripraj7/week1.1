/* Basic React Component Exercises
These exercises are aimed to practice basic JSX use in a single component or in a single file. 
No need to import or export anything yet.
Exercise 2: Create a function called `getGreeting` that returns a greeting message saying 
‘Welcome to the World of React’. Use the function as JSX expression as follows:
<p>{getGreeting()}</p>; */

import React from "react";
function getGreeting(){
    return "Welcome to the World of React";
}
function GreetingComponent(){
    return (
        <p>{getGreeting()}</p>
    );
}
export default GreetingComponent;