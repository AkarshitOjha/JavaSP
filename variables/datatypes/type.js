// datatype in js

//  Primitive Data types 

// In JavaScript, strings are surrounded by quotes:

// Single quotes: 'Hello'
let singleQuote = 'hello'
// Double quotes: "Hello"
let doubleQuote = 'hello1'
// Backticks: `Hello`
let backticks = `hello2`

console.table([singleQuote,doubleQuote,backticks])
// ==========================================================================================================================================

// JavaScript Number
// In JavaScript, the number type represents numeric values (both integers and floating-point numbers).
// Integers - Numeric values without any decimal parts  Infinity, -Infinity , NaN (Not-a-Number) it is a computational error. It is a result of an incorrect--
// or an undefined mathematical operation, for instance:


let int = 949557574
let int1 = -35
let int2 = -10000000000000

console.table([int,int1,int2])

// -----Nan
console.log( "not a number" / 2 );

// ==============================================================================================================================================

// BigInt use ---------------------------

//  to hndle the large numric data 
// how to use -----

let x = 12737473n
let y =  475748847538475n    // (n)-- represent BigInt 
console.log(x*y)

// ==============================================================================================================================================

// Booleaen return only true false
// ==============================================================================================================================================
// Undefined type
// The meaning of undefined is “value is not assigned”. If a variable is declared, but not assigned, then its value is undefined:

let age;
console.log(age)
// ==============================================================================================================================================
// Null type 
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

let age1= null
console.log(null)
// ==============================================================================================================================================

// Typeof operator
// The typeof operator returns the type of the operand

let a = 100
console.log(typeof(a))

// ==============================================================================================================================================





