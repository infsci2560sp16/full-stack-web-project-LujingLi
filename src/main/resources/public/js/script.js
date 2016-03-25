function checkSignup(){

   var username1= document.getElementById("username").value;
   var username2=document.getElementById("username2").value;
   var psw1= document.getElementById("psw").value;
   var psw2=document.getElementById("psw2").value;
   if(username1==="" || username1 ===null)
   {
      document.getElementById("textUser1").innerHTML="username should not be empty";
      return false;
   }
  else{
    if(username2===""|| username2===null)
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
    else if(psw==="" || psw===null)
    {
      document.getElementById("textPsw1").innerHTML="password should not be empty";
      return false;
    }
    else if(psw2==="" || psw2===null)
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
// ajax function for sign up
// function checkUsername()
// {
//   var username = $("input#username").val();
//   $.ajax({
//       type: "GET",
//       url: "/api/checkuser/"+username,
//       data: username,
//       dataType: "json",
//
//       success: function (result) {
//
//
//                               //alert(result.success);
//                               if(result.success === "true")
//                               $("#textUser1").html("Username is vaild");
//                               else {
//                                 $("#textUser1").html("Username is occupied, please change another username ");
//                               }
//                             },
//       error: function(jqXHR, textStatus, errorThrown){
//                               console.log("Something really bad happened " + textStatus);
//                               $("#ajaxResponse").html(jqXHR.responseText);
//                             }
//     });
//
// }
//
//
//


$(document).ready(function() {

    //Stops the submit request
    $("#signupForm").submit(function(e){
           e.preventDefault();
    });
    //checks for the button click event
        $("#username").on("focus",function(e){


                //get the form data using another method
                var username = $("input#username").val();
                //dataString =  username;
                //console.log(username);
              //  alert(username);
                //make the AJAX request, dataType is set to json
                //meaning we are expecting JSON data in response from the server
                $.ajax({
                    type: "GET",
                    url: "/api/checkuser/"+username,
                    data: username,
                    dataType: "json",

                    success: function (result) {


                                            //alert(result.success);
                                            if(result.success === "true")
                                            $("#textUser1").html("Username is vaild");
                                            else {
                                              $("#textUser1").html("Username is occupied, please change another username ");
                                            }
                                          },
                    //if received a response from the server
                    // success: function( data, textStatus, jqXHR) {
                    //     //our country code was correct so we have some information to display
                    //      if(data.success){
                    //
                    //           //$("#ajaxResponse").html("");
                    //         //  $("#ajaxResponse").append("<b>Country Code:</b> " + data.countryInfo.code + "<br/>");
                    //         //  $("#ajaxResponse").append("<b>Country Name:</b> " + data.countryInfo.name + "<br/>");
                    //         //  $("#ajaxResponse").append("<b>Continent:</b> " + data.countryInfo.continent + "<br/>");
                    //         //  $("#ajaxResponse").append("<b>Region:</b> " + data.countryInfo.region + "<br/>");
                    //         //  $("#ajaxResponse").append("<b>Life Expectancy:</b> " + data.countryInfo.lifeExpectancy + "<br/>");
                    //         //  $("#ajaxResponse").append("<b>GNP:</b> " + data.countryInfo.gnp + "<br/>");
                    //      }
                    //      //display error message
                    //      else {
                    //          $("#ajaxResponse").html("<div><b>Country code in Invalid!</b></div>");
                    //      }
                    // },

                    //If there was no resonse from the server
                    error: function(jqXHR, textStatus, errorThrown){
                         console.log("Something really bad happened " + textStatus);
                          $("#ajaxResponse").html(jqXHR.responseText);
                    },

                    //capture the request before it was sent to server
                    beforeSend: function(jqXHR, settings){
                        //adding some Dummy data to the request
                        settings.data += "&dummyData=whatever";
                        //disable the button until we get the response
                        $('#myButton').attr("disabled", true);
                    },

                    //this is called after the response or error functions are finsihed
                    //so that we can take some action
                    complete: function(jqXHR, textStatus){
                        //enable the button
                        $('#myButton').attr("disabled", false);
                    }

                });
        });

    });
