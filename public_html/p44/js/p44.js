function print (){
var a = Number($("#capture").val());
var b = Number($("#capture1").val());

var result1 = parseInt(a+b);
$("#result1").text("la suma entre "+a+" y " +b+ " es "+result1);

var result2 = parseInt(a-b);
$("#result2").text("la resta entre  "+a+" y "+b+" es "+result2);

var result3 = parseInt(a*b);
$("#result3").text("la multiplicación entre " +a+ " y " +b+" es "+result3);

var result4 = (a/b);
$("#result4").text("la división entre "+a+" y "+b+" es "+result4);

};

