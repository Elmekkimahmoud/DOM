
  var  nameFi = document.getElementById ('name');
  var  last = document.getElementById ('Lastname');
  var add = document.getElementById ('address');
  var  email = document.getElementById ('mail');
  var  psswd = document.getElementById ('password');
  var  cmnt = document.getElementById ('comments');

document.getElementById("button-sub").
addEventListener('click',function testt() {
  if((nameFi.value)=="" ||(last.value)==""||(add.value)==""||(email.value)==""||(psswd.value)==""||(cmnt.value) =="") {
  alert('One of the inputs is empty')
  }
}) ;
 
document.getElementById("button-sub").addEventListener('click',function length() {


 let expreg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
  if (psswd.value.length <8){
    alert ('Password has less than 8 characters')  
  }
  else if(!expreg.test(psswd.value)){

    alert ('The password must be a combination of charatacters , numbers and at least a capital letter')  


  }
    
});

document.getElementById("button-res").addEventListener('click',function rest() {


  return nameFi.value =last.value= add.value =email.value=  psswd.value =cmnt.value ="";


})