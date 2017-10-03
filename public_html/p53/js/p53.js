function print(){
$("#result").text("regla de tres");
$("#result1").text("x1=y1");
$("#result2").text("x2=y2");

var x1 = $("#capture1").val();
var y1 = $("#capture2").val();
var x2 = $("#capture3").val();
var y2 = $("#capture4").val();

var y2 = (x2*y1)/x1;
$("#result").text("The rule of three is "+y2);
}