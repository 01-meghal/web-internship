// let a =[ " pranjal" , "shubham ", "harshit" ];
// a.sort()
// console.log(a)
// a.reverse()
// console.log(a)

// //--------------------------------------------
// let a =[ " pranjal" , "shubham ", "harshit" ];
// a.push(10)
// console.log(a)
// a.pop()
// console.log(a)

//--------------------------------------------------
// let a =[ " pranjal" , "shubham ", "harshit" ];
// let b =[10,30,50];
// let c= a.join(b)
// // let c= a.concat(b)
// console.log(c)

//---------------------------------------------------
// let a =[ " pranjal" , "shubham ", "harshit" ];
// a.shift()
// console.log(a)
// a.unshift()
// console.log(a)

//-----------------------------------------------
// let a =[ " pranjal" , "shubham ", "harshit" ];
// // b=a.slice(1,3)
// // console.log(b)
// a.splice(1,0,Mmmm,yyyyy )
// console.log(a)

//---------------------------------------------------

//amstrong number
// let a=[1,5,3]
// let b=a.map((item)=>{
//   return item**3
// })
// console.log(b)
//  let c=b.reduce((acc,end)=>{
//      return acc+end
//  });
//  let number = a.join(""); 
//  let original = Number(number);

// if(c==original){
//     console.log("amstrong number")
//  }
// else{
//     console.log("not amstrong number")
// }

//----------------------------------------
let size = 5; 
for (let row = 0; row < size; row++) {
  let line = "";
  for (let col = 0; col < size; col++) {
    if (row === 0 || row === size - 1 || col === 0 || col === size - 1) {
      line += "* ";
    } else {
      line += "  "; 
    }
  }
  console.log(line);
}
