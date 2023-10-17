/*Exercise 4: Define an array of numbers and render their squares using JSX. Squared means that the number 
is multiplied by itself. You should render each number as a <p> element in the following format <p>X squared is
 Y</p> where X is the number and Y is the squared value.If your numbers are for example 1,2,3,4,5 then the output
  as DOM structure should be:<p>1 squared is 1</p><p>2 squared is 4</p><p>3 squared is 9</p><p>4 squared is 16</p>
  <p>5 squared is 25</p>*/

    import React from "react";
    function SquareComponent(){
        const numbers= [1,2,3,4,5];
        const squaredElements= numbers.map((number) => (<p>{number} squared is {number*number}</p>));
        return (
            <p>{squaredElements}</p>

        )

    }
    export default SquareComponent;