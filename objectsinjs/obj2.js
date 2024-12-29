// part2 object ========================================================================

// how to define object
// const obb2 = new Object()  // aise bhi kr skte hai define
const obb1 = {}
obb1.name = "Akarshit"
obb1.lastname = "ojha"
obb1.location = "hyderabad"
obb1.email = "ojhakarshit@gmail.com"

// console.log(obb1);
// ...example of nested object

const hi2 = {
    name:{
        name:"akarshit",
        fullname:{
            fullname:"akarshit ojha",
            location2:{
                location2: "hyderabad"
            }
        }
    }
}

// how to be access.....................

// console.log(hi2.name.fullname.location2);  // dot dot lagate aao or acces krte zaao

// ab agar objects ko ek me add krna ho to just like array

const obt1 = {1:"HELLO",2:"AKARSHIT",3:"OJHA"}
const obt2 = {4:"HELLO1",5:"AKARSHIT1",6:"OJHA1"}

// let obt3 = {obt1,obt2}    // its not a good method to add any objects 
// console.log(obt3);

// second way to add objects  ye bhi ek best way haa add krne ka 

// let obt3 = Object.assign(obt1,obt2)  // imse kya hoga ki obt2 ki saari value obt1 me assign hogi hum ise aise hi samzhnge  
// let obt3 = Object.assign({},obt1,obt2)  // isme kya hai ki obt1 and obt2 treated as source and empty curly braces as target all object source value added in target to aise samzho 
// console.log(obt3);

//  third way or bhi jada easy hai kii...........

let obt3 = {...obt1, ...obt2}  // use spread opeartor to add
console.log(obt3);




