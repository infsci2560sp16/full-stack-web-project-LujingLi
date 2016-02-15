function checkSignup(){

   var username1= document.getElementById("username").value;
   var username2=document.getElementById("username2").value;
   var psw1= document.getElementById("psw").value;
   var psw2=document.getElementById("psw2").value;
   if(username1=="" || username1 ==null)
   {
      document.getElementById("textUser1").innerHTML="username should not be empty";
      return false;
   }
  else{
    if(username2==""|| username2==null)
    {
      document.getElementById("textUser2").innerHTML="you should confirm your username";
      return false;
    }
    else if(username2!= username1)
    {
      document.getElementById("textUser2").innerHTML="";
      document.getElementById("textUser2").innerHTML="failed to confirm your username ";
      return false;
    }
    else if(psw=="" || psw==null)
    {
      document.getElementById("textPsw1").innerHTML="password should not be empty";
      return false;
    }
    else if(psw2=="" || psw2==null)
    {
      document.getElementById("textPsw2").innerHTML="you should confirm your password";
      return false;
    }
    else if(psw2!= psw1)
    {
      document.getElementById("textPsw2").innerHTML="";
      document.getElementById("textPsw2").innerHTML="failed to confirm your password ";
      return false;
    }
    else
    return true;

  }

}
