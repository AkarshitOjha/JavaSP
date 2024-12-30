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
// console.log("Your cart ",cart);


// object function me kaise paas hoga  ===============================================================================================

// create object 
const mypersonaldetail = {
    name:"Akarshit ",
    lastName:"ojha",
    conatact:8545025990,
    loacation:"Hyderabad",
    age:21
}

// create function and pass it 
function  mydetail(detail){
    let det = (`my personal deatil is -${detail.name + detail.lastName} , my contact-${detail.conatact},my loaction ${detail.loacation},my age -${detail.age}`)  
    return det
}
let det =(mydetail(mypersonaldetail));
// console.log(det)

// same as create array and pass in function

const ar1 = [1,23,4,5]
 
function myar1 (aar){
    let ww = aar
    return ww
}
let ww = myar1(ar1)
console.log("My array is =",ww)






