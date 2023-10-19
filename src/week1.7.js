/*Define an array of fruits and render a list of fruit names using JSX. The DOM 
structure of the output should be when oranges, apples and bananas are in the array
 as strings:<p>My favorite fruits are: oranges, apples, bananas</p>; */

 import React from "react";
 function FavouriteFruits(){
    const MyFruits = ["oranges,apples,bananas"];
    const MyFavouriteFruits=MyFruits.map((Fruits) => <p>My favorite fruits are:{MyFruits}</p>)
    return (
       <div> {MyFavouriteFruits}</div>
    );
 }
    export default FavouriteFruits;