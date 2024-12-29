// objects in javascript 
// object ko defined krne ke 2 tareeke hai ..........(1.)literals ke throughs (2.)- constructor ke through-
// but ek concept aata hai (Singleton ka) zab hum constructor ke through objec tkrte hai to vo singleton ki trh hi hota hai

// 1 - object literals

const mysymbol = Symbol("Hello") 
let obj1 ={
    name: "akarshit",
    id: 45544,
    email:"akarshit22@gmail.com",
    location:"delhi",
    "isloggedin":"yes",
    [mysymbol]:"akrshit"
}

// console.log(obj1)

// console.log(obj1.email);      // normal to hum aise access krte hai     
// console.log(obj1.location);

// console.log(obj1["isloggedin"])  // or ek aisa tareeka ki behind the scene all values treated as string to hume bina dot lagaye access krna hai to aie hi kr paayenge.
// console.log(obj1["email"]);

// agar hum symbol ki baat kre to ye kaise declare hoga object me 

// console.log(obj1[mysymbol])  // symbol ko aise hii acces kr paayenge

// or sabse important baat hai ki agar hume ye ssari value freeje krni hai to taaki koi change na kar paaye to hume saaari value freeje krni hogi.

// Object.freeze(obj1)   // now we freeje all values that  can be change it 
obj1.email = "ojhaakarshit111@gmail.com"
console.log(obj1)

// ===========================================================================================================================================
// ============================================functions======================================================================

obj1.greeting = function(){
    console.log("hello js user");
    
}
console.log(obj1.greeting())

obj1.greeting2 = function(){
    console.log(`hello js user ${this.name}`);   //string manupulation method
    console.log(`hello write your mail here ${this.email}`)
    
}
console.log(obj1.greeting2());

