let a = +prompt("nhập a");
let b = +prompt("nhập b");
let i;
let n=0;
if(a<b){
    for(i=a;i<=b;i++){
        n += i;
    }
}else{
    for(i=b;i<=a;i++){
        n += i;
    } 
}
console.log(n);