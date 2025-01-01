// before understandin arrow function first we know the some more basic conscept of object and function 

//  first we create object and function like grreting and pass vlaue 

const myDetail = {
    name: "akarshit ojha",
    id: 45667,
    loaction:"Hyderabad",
    age:21,

    greetingMessage:function(){
    //  console.log(`here is my personal deatil - My Name-${this.name},ID-${this.id}, location-${this.loaction},Age- ${this.age}`)
    //  console.log(this)

    }
}
myDetail.greetingMessage();
// console.log(this);
// kuch important points hai ....... (this) operator use to only access object only 

function hello (){
    // console.log(this)
}
// hello()

const myname = function(){
    let username = "Akarshit ojha"
    console.log("My name is-",this.username  )    // this ko hum function ke andar use ni kr skte
    // console.log(this);
    
}
myname()

const myname2 = ()=>{
          console.log(this)
} 

