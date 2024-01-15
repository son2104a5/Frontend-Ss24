let n = +prompt("nhập 1 số nguyên dương");
let sum=1;
for(let i=2;i<=n;i++){
    sum += 1/(i**3);
}
console.log(sum);