var n = prompt ("Enter a number");
c=0;
for (var i=1; i<=n; i++)
    if((n%i)===0){
        c ++;
    }
if (c>2){
    console.log ("The number is prime");
}
    else {
    console.log("The number is not prime");
    }



