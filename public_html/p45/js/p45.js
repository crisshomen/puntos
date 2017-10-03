function print (){
var n = Number($("#capture").val());
c=0;
for (var i=1; i<=n ; i++)
    if((n%i)===0){
        c ++;
    }
if (c>2){
    $("#result1").text("The number is prime");
}
    else {
    $("#result1").text("The number is not prime");
    }
};

