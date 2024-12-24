// Stack and Heap memory

// stack memory (primitive data type)   ,  heap memory(Non-Premetive )

let customerName = "Akarshit" // inka zo case hai isme variable to assign honge different but zo value hogi vo copy hogi means change kroge to original pe farak ni hoga 
let customerName2 = customerName
customerName2 = "shruti"
// console.log(customerName);
// console.log(customerName2);

// heap.. isme bhi variable assign honge but value isme copy ni original vlaue refrence type hogi ki agar change kiye to original me bhi hoga 

let customer = {
    id : 6767676,
    address : "mp"
    
}
let customerid2 = customer
// console.log("id2=", customerid2);
// console.log("id=",customer.id)

customerid2.id= 99999
console.log("id2=", customerid2.id);
console.log("id=",customer.id)




