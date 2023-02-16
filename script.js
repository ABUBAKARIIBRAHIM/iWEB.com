function validateform(Ourform){
if(Fistname==null||Firstname=="" ){
  alert("Name can't be blank");
  return false;
}
else if(password.length<6){
  alert("Password must be at least 6 characters long.");
  return false;
}
}
