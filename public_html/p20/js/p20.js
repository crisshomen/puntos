var sm = 736000;
var aux = 80000;
var payment = "";
var rt = "";
var salary = parseInt(prompt("Enter your salary"));
var rf = parseInt(prompt(("Enter your source retention")));
var day = Number(prompt("Enter the number of days worked"));
var retenction = "";
if (day>30){
    alert ("Maximum of 30 days");
}
var payment = parseInt(salary + aux);
if (salary <= (sm * 2)) {
    payment = salary + aux;
    console.log("Will be granted transport aid then your payment will be " + payment);
} else {
    retenction = (rf * salary )/100;
    rt = ( salary - retenction);
    console.log (rt);
}


