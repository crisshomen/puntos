$("#result").hide();
$("#dates").hide();
$("#dates1").hide();
$("#dates2").hide();
$("#dates3").hide();

function personal(){
   $("#menu").hide();
   $("#dates").show();
}

function volver1 (){
   $("#menu").show();
   $("#dates").hide();
}


function family(){
   $("#menu").hide();
   $("#dates1").show();
}

function volver2 (){
   $("#menu").show();
   $("#dates1").hide();
}

function work(){
   $("#menu").hide();
   $("#dates2").show();
}

function volver3 (){
   $("#menu").show();
   $("#dates2").hide();
}

function professional(){
   $("#menu").hide();
   $("#dates3").show();
}

function volver4 (){
   $("#menu").show();
   $("#dates3").hide();
}

function print(){
   $("#menu").hide();
   $("#result").show();
   $("#dates4").html("Nombre : " +personalinformation.name+"<br> apellido : " + personalinformation.LastName +"<br> identificacion : "+ personalinformation.identificationcard +"<br>Email : "+ personalinformation.mail +"<br>fecha de nacimiento : "+ personalinformation.birthdate );
   $("#dates5").html("Nombre : " +FR.name1+"<br> apellido :" +FR.ln1+"<br> identification :" +FR.ic1+"<br>email: " +FR.mail1+"<br>fecha de nacimiento :" +FR.br1);
   $("#dates6").html("Nombre :" +WR.name2 +"<br> apellido :" + WR.ln2 +"<br> identfication :" +WR.ic2 +"<br>email" +WR.mail2 +"<br>fecha de nacimiento :" +WR.br2);
   $("#dates7").html("Nombre : " +DDP.name3+"<br> apellido:" +DDP.ln3 +"<br> identification :" +DDP.ic3 +"<br>email: " +DDP.mail3+"<br>fecha de nacimiento:" +DDP.br3);
}


function capture(){
        personalinformation={
        name: "",
        LastName: "",
        identificationcard:"",
        mail:"",
        birthdate:""
    };
    personalinformation.name = $("#name").val();
    personalinformation.LastName = $("#lastname").val();
    personalinformation.identificationcard = $("#identificationcard").val();
    personalinformation.mail = $("#mail").val();
    personalinformation.birthdate = $("#birthdate").val();
    }
    
function capture1(){ 
        FR={
        name1: "",
        ln1: "",
        ic1:"",
        mail1:"",
        br1:""
    };
    FR.name1 = $("#name1").val();
    FR.ln1 = $("#ln1").val();
    FR.ic1 = $("#ic1").val();
    FR.mail1 = $("#mail1").val();
    FR.br1 = $("#br1").val();
    }
function capture2(){
    WR={
        name2: "",
        ln2: "",
        ic2:"",
        mail2:"",
        br2:""
    };
    WR.name2 = $("#name2").val();
    WR.ln2 = $("#ln2").val();
    WR.ic2 = $("#ic2").val();
    WR.mail2 = $("#mail2").val();
    WR.br2 = $("#br2").val();
    }
function capture3 (){
    DDP={
        name3: "",
        ln3: "",
        ic3:"",
        mail3:"",
        br3:""
    };
    DDP.name3 = $("#name3").val();
    DDP.ln3 = $("#ln3").val();
    DDP.ic3 = $("#ic3").val();
    DDP.mail3 = $("#mail3").val();
    DDP.br3 = $("#br3").val();
}















