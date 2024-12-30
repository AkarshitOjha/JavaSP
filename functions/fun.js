function addtwonum (num1,num2){
    let num3 = num1+num2
    return num3

}
const num3=(addtwonum(2,4));
// console.log("Num3 ",num3)
 
// or kaise funtion declare kre dekho 

function isloggedin (usernme){
      return `${usernme} Welcome to our community`
}
//  console.log(isloggedin("akarshit2")) // without condition ye simple print kr raha tha ab hum isme consdtion denge
 
 function isloggedin2 (user2) {
    if(user2===undefined){
        return ` given name is invalid`     // agar humne koi value paass ni ki to ye value print hogi
    }
    return `${user2} welcome our community 2`
 }

//   console.log( isloggedin2());

// =======================================================================================================

// some more point to be noted in functions ... related to hum add to cart par kaam kaise krte hai 

function addtocart (...cart){
    return cart
}

let cart=(addtocart(500 ,1000,455,678,900));   // iska ye mtlb tha kii hamre cart me user kitni value lega to ni pata isliye hum (...cart)->rest operator use krenge
console.log("Your cart ",cart);


// object function me kaise paas hoga  ===============================================================================================

// create object 
const 




