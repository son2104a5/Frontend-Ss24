let n = +prompt("nhập 1 số nguyên dương bất kỳ");
let prime=0;
for(let i=2;i<=n;i++){
    if(n%i===0){
        prime++;
    }
}
if(prime<=2){
        console.log(n + " là số nguyên tố");
    }else{
        console.log(n + " không là số nguyên tố");
    }