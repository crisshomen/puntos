var numeros = new Array();
i = 0;
while (i < 10) {
    numeros.push(Number(prompt("Enter The  numbers")));
    i++;
}

console.log("                    PARES");
console.log("                                          for ");
i=0;
pair=[];
for ( var i=0 ; i<10 ; i++){
    if ((numeros[i]%2) === 0);
    if (i<10);
    i++;
    pair.push(numeros[i]);
}
console.log(pair);


console.log("                                     do while ");
i=0;
pair=[]; 
 do {
     if ((numeros[i]%2)===0){
     pair.push(numeros[i]);
     };
    i++;
 }while(i<10)
     console.log(pair);
   

 console.log("                                        while");
 i=0;
 pair=[];
 while (i<10){
     i++;
     if (numeros[i] % 2 === 0){
      pair.push(numeros[i]);     
    }
}
console.log(pair);



console.log("                     PRIMOS");


console.log("                                  do While");
primenumber = [];
var p = 0;
do {
  var cont = 1;
  var tmp = 0;
  do {
    if (numeros[p] % cont === 0) {
      tmp++;
    }
    cont++;
  } while (cont <= numeros[p])
  if (tmp === 2) {
    primenumber.push(numeros[p]);
  }
  p++;
} while (p < numeros.length)

console.log(primenumber);



console.log("                                    While");
prime = [];
var p = 0;
while (p < numeros.length) {
  let cont = 1;
  let tmp = 0;
  while (cont <= numeros[p]) {
    if (numeros[p] % cont === 0) {
      tmp++;
    }
    cont++;
  }
  if (tmp === 2) {
    prime.push(numeros[p]);
  }
  p++;
}
console.log(prime);


console.log("Sum of pair numbers");
var pairsum = 0;
for (var i = 0; i < pair.length; i++) {
  pairsum = pairsum + pair[i];
}
console.log(pairsum);


console.log("Sum of prime numbers");
var primesum = 0;
for (var i = 0; i < prime.length; i++) {
  primesum = primesum + prime[i];
}
console.log(primesum);


console.log("average of pair numbers");
average = pairsum / prime.length;
console.log(average);


console.log("average of prime numbers");
average = primesum / prime.length;
console.log(average);
