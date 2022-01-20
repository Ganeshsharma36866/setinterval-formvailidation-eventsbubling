
function validationform(){
var name = document.getElementById("name").value;
var pass = document.myform.password.value;
var radio=document.myform.select.value;

if (name == null || name == "") {

document.getElementById("name").style.backgroundColor="red" ;
    return false;
}
else if(pass.length < 6) {
    alert("Passowrd cannt be less then 6 character");
    return false;
}
else if (!radio[0]) {
alert("please choose any Select vaoue");
return false;

}
}
function changetext(){
    document.getElementById("name").style.backgroundColor="white";
}

