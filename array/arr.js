let arrr = [24,5,6,7,8]   // array ko initilize krne ka 1 tareeka
// console.log(arrr);
// console.log(arrr[1]);  // indeex value dekar hum access krte hai value ko

const arr1 = new Array(0,1,3,5,6,7,8)
// console.log(arr1);

// ========================================Arrays Method=========================================================

arr1.push(9)                // push method me hum aise krke array create kr skte hai
// console.log(arr1);   

arr1.pop()                  // last se ek element delete krdega 
// console.log(arr1)

arr1.unshift(9)             // to array ke starting position par add krega
// console.log(arr1);

 arr1.shift()                // shift method samzh ni araha to leave it 
//  console.log(arr1)


// console.log(arr1.includes(5))   // includes method is give boolean ans isme hum check krte hai ki arry me koi element hai ya ni to iss type ki cheje krte hai-
                               // agar hai to index value dega otherwise (-1)
// console.log() 

const myarr = arr1.join()
// console.log("string-",myarr)    // give value in form of string.
// console.log(arr1);

// ===================================================================================================================================

// console.log("A" , arr1)
// let ab = arr1.slice(1,4)  
// console.log(ab)
// console.log("b ", arr1)
// slice me hota ye hai ki ye range value calculate ni krta or orginal array bhi change ni krta 


// console.log("A" , arr1)
// let bc = arr1.slice(1,4)  
// console.log(bc)
// console.log("b ", arr1)

// splice me ye range value bhi change krega poora lega or original array bhii change hoga 

// ==========================================================================================================================================

// ===================================Array part 2==========================================================

// ---------------------- push method==================================================

const a1 = [1,2,3,4,5,6,7,8]
const a2 = ["thor", "hulk"]

// a1.push(a2)
// console.log(a1)   // push method help to merge to array but its not properly merge its not good so much array ke andar aray daal deta hai ye existing-
                  // existing array par kaam krta hai new array ni create krna padta 


const a3 = a1.concat(a2)   // new arry par abana kar kaam krega  ye ache se add krega poora 
console.log(a3);



