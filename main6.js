let a  = +prompt();
let b  = +prompt();
let c  = +prompt();
let count = 0;
let result = 0;
if (a>0){
    ++count;
}
if (b > 0 ){
    ++count;
} 
if (c > 0){
    ++count;
}
if (a < 0){
    ++result;
}
if (b < 0){
    ++result;
}
if (c < 0){
    ++result;
}

console.log(count,"ta musbat",result,"ta manfiy");
