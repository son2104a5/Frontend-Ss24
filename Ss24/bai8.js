let n = +prompt("nhập 1 số bất kỳ");
let prime=0;
let count=0;
let i=1;
do{
    i++;
    for(let j=2;j<=i;j++){
        if(i%j===0){
            prime++;
        }
    }
    if(prime<=2){
        console.log(i);
        count++;
    }
    prime=0;
}while(count!=n);