function almacenar almacenar datos(){
localStorage.sm



var sm = 736000;
var aux = 80000;
var payment = "";
var rt = "";
var salary = Number($("#capture1").val());
var rf = Number($("#capture2").val());
var day = Number($("#capture3").val());
var retenction = "";
if (day>30){
    $("#result1").text("Maximum of 30 days");
}
var payment = parseInt(salary + aux);
if (salary <= (sm * 2)) {
    payment = salary + aux;
    $("#result1").text("Will be granted transport aid then your payment will be " + payment);
} else {
    retenction = (rf * salary )/100;
    rt = ( salary - retenction);
    $("#result1").text(rt);
}
}


