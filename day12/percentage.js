let percent=50;
if(percent > 80 && percent <= 100){
    console.log("grade O")
}
else if(percent > 60 && percent <= 80){
    console.log("grade A")
}
else if (percent>45 && percent<=60){
    console.log("grade B")
}
else if (percent>33 && percent<=45){
    console.log("grade c")
}
else if (percent<33){
    console.log("grade fail")
}
else{
    console.log("invalid")
}