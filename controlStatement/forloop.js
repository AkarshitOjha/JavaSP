// const array = [2,3,4,5,6,7]

// console.log("here is array length",array.length);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
    
    
// }


// lets try to print table

// for (let i = 0; i <=10; i++) {
//     const element= i;
//     console.log(`the outer element of i ${i}`);
//     for (let j = 0; j <=10; j++) {
//         const element =j;
//         console.log(`the inner element of j ${j}`);
        
//     }
    
    
// }

// now one more final try to print table

// for (let i = 0; i <=10; i++) {
//     console.log(`the outer part of element is i ${i}`);
//     for (let j = 1; j <=10; j++) {
//         console.log(i +"*" +j + "=" + i*j);
           
//     } 
// }

// =======================Break and continue statement======================================

// for (let index = 1; index <=10; index++) {
//     if (index===7) {
//         console.log("7 is found now break it")
//         break;
//     }
//     console.log(`hello this is numbers ${index}`);
    
    
// }

// ======================================================================================
for (let index = 1; index <=10; index++) {
    if (index===7) {
        console.log("7 is found now break it")
        continue;
    }
    console.log(`hello this is numbers ${index}`);
    
    
}
// ======================================================================