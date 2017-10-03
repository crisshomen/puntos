var homen = 0;
do{
function menu (){
var number = prompt ("1.To make a sum \n\
2.Perform a subtraction \n\
3.Perform a multiplication\n\
4.Make a division \n\
0.exit the program");
return parseInt(number);
} ;
var result = menu();

function sum(){
    var number1 = prompt('Enter a number');
    var number2 = prompt('Enter another number');
    var r = parseInt(number1)+parseInt(number2);
    console.log("the answer is "+r);
} 
function Restaur(){
    var number1 = prompt('Enter a number');
    var number2 = prompt('Enter another number');
    var r = parseInt(number1)-parseInt(number2);
    console.log("the answer is "+r);
}
function multiplication(){
    var number1 = prompt('Enter a number');
    var number2 = prompt('Enter another number');
    var r = parseInt(number1)*parseInt(number2);
    console.log("the answer is "+r);
}
function division(){
    var number1 = prompt('enter a number');
    var number2 = prompt('enter another number');
    var r = parseInt(number1)/parseInt(number2);
    console.log("the answer is "+r);
}
function exit(){
    homen = 1;
}
switch (result) {
    case 1:
        sum();
        break;
        case 2:
        subraction();
        break;
        case 3:
        multiplication();
        break;
        case 4:
        division();
        break;
        case 0:
        exit();
        break;
    default:   
        break;
} 
}while(homen === 0)
