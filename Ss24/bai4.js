let n = +prompt("nhập 1 số");
let sum=0;
for(let i=1;i<(n/5);i++){
    if(i%2==0){
        sum += i**2;
        if(sum>n){
            break;
        }else{
            console.log(i**2);   
        } 
    } 
}