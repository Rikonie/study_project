let n=prompt('Число', '');
nextPrime:
for (let i=2; i<=n; i++) {
    for (let b=2; b<i; b++) {
        if (i%b==0) continue nextPrime;
     }
    alert (i);
}