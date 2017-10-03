function print (){
var a = $("#capture").val();
var b = $("#capture1").val();
var result1 = Math.pow(a,b);
$("#result1").text(a+"a la "+b+"es igual a "+result1);

var result2 = Math.pow(b,a);
$("#result2").text(b+"a la "+b+"es igual a "+result2);

var result3 = parseInt(a*b);
$("#result3").text("la multiplicación entre " +a+ " y " +b+" es "+result3);

var result4 = (a/b);
$("#result4").text("la división entre "+a+" y "+b+" es "+result4);

var result5 = (b/a);
$("#result5").text("la división entre "+b+" y "+a+" es "+result5);

var result6 = (a%b);
$("#result6").text("el módulo de la división entre "+a+" y "+b+" es "+result6);
};
