function formvalidation()
{
    var user = document.signup.name;
    var pass = document.signup.password;
    var email_id = document.signup.email;
    // var phone = document.signup.phone;

    if (userValidation(user)) {
        if (passValidation(pass)) {
          if (emailValidation(email_id)) {
            // if (phoneValidation(phone)) {
            //    {
            //     alert("done")
            //   }
            // }
            popup.classList.remove("open-popupform")
            window.alert("Thank you for choosing us, Your course link has been sent to your registered Email address.")

          }
        }
      }
      return false;
    
}

function userValidation(user){
    
        const min = 3;
        const max = 50;
        var letters = /^[A-Za-z]+$/;
        if (user.value.length >= 3 && user.value.length < 50) {
          if (user.value.match(letters)) {
            return true;
          } else {
            alert("username must have alphabet only");
            fname.focus();
            return false;
            
          }
        } else {
          alert("Word limit for first name is not correct.");
        }
      }


function passValidation(pass){
    var letters=  /^[A-Za-z]\w{7,14}$/;
    if(pass.value.match(letters)) 
{ 

return true;
}
else
{ 
alert('try again')
return false;
}
}

function emailValidation(email_id){
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email_id.value.match(emailformat)) {
      return true;
    } else {
      alert("You have entered an invalid email address!");
      emailid.focus();
      return false;
    }
}

// function phoneValidation(){

// }


// pop up form
let popup = document.getElementById("popup");
function openpopup(){
    popup.classList.add("open-popupform");
}
    