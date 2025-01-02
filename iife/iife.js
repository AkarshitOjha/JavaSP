// Immediately Invoked Function Expressions IIFE 

// global scope ke polution se prblm hoti hai kai baar to zo bhi global scope ke variables hai ya declaration usko hatane ke liye-
// IIFE use krte hai.


// function hello(){
    // console.log("hello")
// }
// hello()  // this is a normal function and then to  convert into IIFE

// (function hello(){
    // console.log("hello")   // This function is IIFE fucntion
// })()

// ================================agar ek se jada iife function dene ho to===============================================
// (function akku(){
//     // this is also a named iffe
//     console.log("hello akku") 
// })();

// (function shruti(){
//     console.log("hello shruutiii") 
// })()

// ================================================================================================
(function (namee){
    // simple iffe 
      console.log(`here my name is ${namee}`)
})("akarshit")