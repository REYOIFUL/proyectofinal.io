function ValidateEmail(exampleInputEmail1){
  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(exampleInputEmail1.value.match(mailformat))
{
alert("Valid email address!");
exampleInputEmail1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
exampleInputEmail1.focus();
return false;
}
}
