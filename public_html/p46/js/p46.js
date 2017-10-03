function print (){

var num = Number($("#capture").val());

    if (num%2===0){
    $("#result1").text ("The number is even");
}
else {
    $("#result1").text("The number is odd");
}

};

