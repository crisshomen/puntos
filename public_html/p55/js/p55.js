function print(){
var numero = ("#capture1").val();
if (numero<0){
    $("#result").text("the result is "+numero*-1);
}else{
    $("#result").text("You must enter a number less than zero");
}
}

