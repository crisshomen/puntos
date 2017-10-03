/* global identificationCard */
var pp = '';
var dates='';
var fr ='';
var wr = '';
var op = 0;
function menu() {
var dates= prompt("1.PERSONAL_INFORMATION \n\
2.FAMILY-REFERENCE \n\
3.WORK-REFERENCE \n\
4.PROFESSIONAL-PROFILE-DESCRIPTION \n\
5.PRINT-RESUME\n\
0.EXIT_THE_PROGRAM");
return parseInt(dates);
}

function PERSONAL_INFORMATION(){
        dates = {
        name:'',
        lastname:'',
        identificationCard:'',
        mail:'',
        birthdate:''
    };
        dates.name=prompt('write your name');
        dates.lastname=prompt('write your lastname');
        dates.identificationCard=prompt('write your identificationCard');
        dates.mail=prompt('write your mail');
        dates.birthdate=prompt('write your birtdate');
        
}

function FAMILY_REFERENCE(){
        fr = {
        name:'',
        lastname:'',
        identificationCard:'',
        mail:'',
        birthdate:''
    };
        fr.name=prompt('write your name');
        fr.lastname=prompt('write your lastname');
        fr.identificationCard=prompt('write your identificationCard');
        fr.mail=prompt('write your mail');
        fr.birthdate=prompt('write your birtdate');
        
}
function WORK_REFERENCE(){
        wr = {
        name:'',
        lastname:'',
        identificationCard:'',
        mail:'',
        birthdate:''
    };
        wr.name=prompt('write your name');
        wr.lastname=prompt('write your lastname');
        wr.identificationCard=prompt('write your identificationCard');
        wr.mail=prompt('write your mail');
        wr.birthdate=prompt('write your birtdate');
        
}
function PROFESSIONAL_PROFILE_DESCRIPTION(){
        pp = {
        name:'',
        lastname:'',
        identificationCard:'',
        mail:'',
        birthdate:''
    };
        pp.name=prompt('write your name');
        pp.lastname=prompt('write your lastname');
        pp.identificationCard=prompt('write your identificationCard');
        pp.mail=prompt('write your mail');
        pp.birthdate=prompt('write your birtdate');
        
}
        function print(){
        console.log("PERSONAL-INFORMATION");
        
        console.log('name : '+dates.name);
        console.log('lastname : '+dates.lastname);
        console.log('identificationCard : '+dates.identificationCard);
        console.log('mail : '+dates.mail);
        console.log('birthdate : '+dates.birthdate);
        console.log('name : '+dates.name);
        
        
        console.log("FAMILY-REFERENCE");
        
        console.log('name : '+fr.name);
        console.log('lastname : '+fr.lastname);
        console.log('identificationCard : '+fr.identificationCard);
        console.log('mail : '+fr.mail);
        console.log('birthdate : '+fr.birthdate);
        console.log('name : '+fr.name);
        
        
        console.log("WORK-REFERENCE");
        
        console.log('name : '+wr.name);
        console.log('lastname : '+wr.lastname);
        console.log('identificationCard : '+wr.identificationCard);
        console.log('mail : '+wr.mail);
        console.log('birthdate : '+wr.birthdate);
        console.log('name : '+wr.name);
        
        
        console.log("PROFESSIONAL-PROFILE-DESCRIPTION");
        
        console.log('name : '+pp.name);
        console.log('lastname : '+pp.lastname);
        console.log('identificationCard : '+pp.identificationCard);
        console.log('mail : '+pp.mail);
        console.log('birthdate : '+pp.birthdate);
        console.log('name : '+pp.name);
        
        }
        function EXIT_THE_PROGRAM (){
            op = 1;
        }

do{
var result = menu();
switch (result) {
    case 1:
        PERSONAL_INFORMATION();
        break;
        case 2:
        FAMILY_REFERENCE();
        break;
        case 3:
        WORK_REFERENCE();
        break;
        case 4:
        PROFESSIONAL_PROFILE_DESCRIPTION();
        break;
        case 5:
        print();
        break;
        case 0:
        EXIT_THE_PROGRAM();
        break;
        default:
        break;
        }
        }while(op === 0);
        
        