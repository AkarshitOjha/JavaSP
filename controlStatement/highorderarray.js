// loop in array

const myarr = ["hulk", "flash","wonder women", "caption america"]

for (const arr of myarr) {
    // console.log(`${myarr}`);
    
    // console.log(`hello this is list of superhero ${arr}`);
    
}

const char = "Hello akarshit"

for (const chrr of char) {
    // console.log(`${chrr}`);
    
}

// ================== some concept of map=======================

const map = new Map()
map.set("IN" , "India")
map.set("USA" , "United State of America")
map.set("Fr" , "France")
map.set("Brz" , "Brazil")
// map.set("Brz" , "Brazil") // map -> not print duplicate value , print in same order whatever u give line by line, uniqness provide value.
// like as object type

// console.log(map);    

// for loop for map 

for (const [key , value] of map) {
    console.log(`${key +"=" + value}`);   // more filter krke banana
    
}
for (const key of map) {
    console.log(`${key}`);    // simple way me print krwana
}
// ===========================================================================================

// object par use kaise krenge dekho or thoda loop bhi change hoga

const obt = {
    name: "Akarshit",
    id: "23444",
    state: "Uttar Pradesh",
}

for (const key in obt) {
    // console.log(key);    // isme sirf key print hui hai ... not key value too value print krne ke liye hum .....

    // console.log(`${key} here the value is ${obt[key]}`);   // value aise aayegi object ki 
    
    
}

// array ko phir se dekhenge 

const ar1 = [1,2,3,4,5,6]

for (const key in ar1) {
//    console.log(key);   // abhi array ki key pata cahala hai not value array ki bhi keys hoti hai or vo zero se bydefault start hoti hai.
                       // zabki object me key bhi khud define krte hai to ab value kaise nikalnege array me se.

   console.log(`${ar1[key]}`);   // value aagyii
   
} 

// map ko hum (for in loop) se ni kr skte