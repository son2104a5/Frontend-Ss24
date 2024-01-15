let n = +prompt("nhập 1 số nguyên dương");
let ans=0, tmp;
while(n>0){
    tmp = n%10;
    ans = ans * 10 + tmp;
    n = Math.floor(n/10);
}
console.log(ans);
