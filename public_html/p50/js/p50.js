function print(){
var n = Number($("#capture").val());
var bond = 258320000/n;
$("#result").text("Each employee will receive "+bond);
var coHo = 45000;
var gaHo = 20000; 
var numHo = 0;
var hours = Number($("#capture1").val());
var numHo = (coHo*hours)-gaHo;
$("#result1").text("The electrician's gain for a day is "+numHo);

var feet = 5280;
var Inches = 12;
var cm = 2.54;
var answer = 0;
var  answer = (cm * Inches)*feet;
$("#result2").text("In a mile there are " + answer);
}