// console.log("a")
// setTimeout(()=>{
//     console.log("b")
// },2000)
// console.log("c")

// const { use } = require("react");

//-------------------------------------------

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("task is completed : good afternoon everyone")
//         resolve()
//     },4000)
// }).then(function(){
//     console.log("task 2 is completed")
// })

//---------------------------------------------------

// const PromiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("task is completed : good afternoon everyone")
//         resolve()
//     },4000)
// }).then(function(){
//     console.log("task 2 is completed")
// })

//-------------------------------------------------------

// const PromiseOne =new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("task is completed : hello everyone")
//         resolve({username : "meghal" , password : "1234" , email : "meghal8@gmail.com"})
//     },3000)
// })
// PromiseOne.then(function(user){
//     console.log(user)
//     console.log("promise is consumed")
// })

//-----------------------------------------------------------

// const promisefour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let hello = true;
//         if(hello){
//             resolve({username : "meghal" , password : "12345" , email : "meghal8@gmail.com"})
//         }else{
//             reject("something went wrong")
//         }
//     },1000)
// })
// promisefour
// .then((user)=>{
//     console.log(user)
//     return user.password
// })
// .then((user)=>{
//     console.log(user)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("happy independence day")
// })

//--------------------------------------------------------------

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{return res.json()}).then((data)=>{
//     console.log(data)
// })

//------------------------------------------------------------------

async function getalluser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/comments")
    const data = await response.json()
    console.log(data)
}
getalluser()