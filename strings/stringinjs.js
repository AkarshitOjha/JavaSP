// normal defined string 

let a = "abcd"  // this is common

// but in standard way to define

let stringName1 = new String("Hello")
console.log(stringName1)
console.log(stringName1.length)   // string ki lenght batayega
console.log(stringName1.charAt(4))   // kis index par konsa chart hai to hum index vlause dekar pata krenge
console.log(stringName1.indexOf("o")); // to yaha hum charcter dete hai ye pata krne ko ki kon se index par hai 

console.log(stringName1.toLocaleUpperCase())  // ye string to complete uppercase krega

// ==============================================================================================================================================

//  substring ===============================================
let ab = "Akarshit"
console.log(ab.substring(0,5))

// =============================================================================================================
// trim
let ad  = "    Akarshit...     "
console.log(ad.trim());  // reduse the unwanted space from string
