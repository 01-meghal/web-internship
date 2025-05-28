let n=5;
for (let i=1 ;i<=n ; i++){
let star = "*";
let space = " ";
console.log(space.repeat(n-i)+star.repeat(i*2-1))
}
  
let a=5;
for (let i=1 ;i<=a ; i++){
let star = "*";
let space = " ";
console.log(space.repeat(a-i)+star.repeat(i))
}

let b=5;
for (let i=1 ;i<=b ; i++){
let star = "*";
console.log(star.repeat(i))
}

let c=10;
for (let i=1 ;i<=c ; i++){
console.log(`${c}*${i}=${c*i}`)
}