/**
 * Js Core:
 *  - Js run in 2 phases: 1. compilation and  2. execution
 *  - Compilation:
 *     - It allocates memory for all the variables and functions that are use
 *     - Check for syntax and semantics
 *     $ Hoists all the variables at the top.
 *  - Execution:
 *    - It runs the logic and process
 *    $ Assignment happens after compilation in this phase.
 */

/**
 * Hosting: The process of moving all the variables on the top of the code under the hood assigning them undefined.
 * Temporal Dead Zone: TDZ, is the concept introduced with let and const. Although let and const are hoisted in the code but there value cannot be used before the line of their actual declaration in the code. The time between these is called TDZ.
 */

/**
 * - var, let, const all are hoisted.
 * - To avoid unwanted bugs, ES6 onwards let and const were introdued which have a "Temporal Dead Zone" (TDZ).
 * - var has a functional scope.
 * - let and const have block scope.
 * - var can be re-declared and re-assigned,
 * - let can be re-assigned only.
 * - const cannot be re declared or re-assigned.
 */

const op1 = () => {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
  }

  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
  }
};

// Output would be:
// 3 3 3
// 0 1 2
// Why? Because var is having a functional scope and hence it is not re declared in every iteration of the loop and shares oonly one instance. after the sync loop is executed the async settimeouts will run when the value of var 3 and hence they will be logged. 
// In case of let, they are blocked scopic hence are re declared in every iteration it has unique value and same has the settimeout.

// NOticed zero ms delay in timeout. It shows that settimeout is async and gets ushed into Macrotask queue, which runs after the sync execution is done. No matter how much is the delay.

const op2= ()=>{
    for (var i = 0; i < 3; i++) {
     ((x)=>{
        setTimeout(()=>console.log(x),0);
     })(i)
  }
}

// This will output 0 1 2, because now the var is copied into an Immediately Invoked Funcitoin(IIFE) hence retains its value due to funcitonal scope.


var abc=23;
const op3= ()=>{
    var abc=24;
    console.log(abc) // 24, as the variable has fucntional scope and can be re declared
}

let xyz=23;
const op4= ()=>{
    let xyz=24;
    console.log(abc) // ReferrenceError, let can not be re declared.
}



console.log(a);
var a=10;
console.log(b);
let b=10;

// Output: 
// undefined
// RefError, let is in TDZ.
// var is hoisted and declared but not assigned a value.
