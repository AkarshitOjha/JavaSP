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





