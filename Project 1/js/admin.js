function newpage()
{
    window.location.href='adminpage.html'
}

function formValidation() {
    // var Firstname = document.registration.Firstname;
    // var Lastname = document.registration.Lastname;
  //   var uname = document.registration.username;
  var uemail = document.registration.email;
   var upassword = document.registration.password;
  
    if((uemail.value==''||uemail.value==null)
  &&(upassword.value==''||upassword.value==null))
  {
      alert("All field are required field..");
      uemail.focus();
      return false;
  } 
  //   if (userid_validation(uid, 5, 12)) {
      // if (passid_validation(passid, 7, 12)) {
        // if (allLetter(Firstname)) {
          // if (allLetter(Lastname)) {
           if (ValidateEmail(uemail)) {
           
              if (passid_validation(upassword, 7,12)) 
              
              {
          // if (alphanumeric(uadd)) {
            // if (countryselect(ucountry)) {
              // if (allnumeric(uzip)) {
                
                  // if (validsex(umsex, ufsex))
                  // {
                      alert("You have signed in successfully as admin");
                  // }
              }
              else{
                window.alert("wrong values")
              }
          }
          // }
        // }
      // }
    // }
    return false;
  }
  function userid_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
      alert(
        "User Id should not be empty / length be between " + mx + " to " + my
      );
      uid.focus();
      return false;
    }
    return true;
  }
  function passid_validation(upassword, mx, my) {
    var passid_len = upassword.value.length;
    if (passid_len == 0 || passid_len >= my || passid_len < mx) {
      alert(
        "Password should not be empty / length be between " + mx + " to " + my
      );
      upassword.focus();
      return false;
    }
    return true;
  }
  function allLetter(uname) {
      if(uname.value==''||uname.value==null)
      {
        alert("This name field is required");
        return false;
      }
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
      return true;
    } else {
      alert("Username must have alphabet characters only");
      uname.focus();
      return false;
    }
  }
  function alphanumeric(uadd) {
      if(uadd.value==''||uadd.value==null)
      {
        alert("This country field is required");
        return false;
      }
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
      return true;
    } else {
      alert("User address must have alphanumeric characters only");
      uadd.focus();
      return false;
    }
  }
  function countryselect(ucountry) {
  if(ucountry.value==''||ucountry.value==null)
    {
      alert("This country field is required");
      return false;
    }
    if (ucountry.value == "Default") {
      alert("Select your country from the list");
      ucountry.focus();
      return false;
    } else {
      return true;
    }
  }
  function allnumeric(uzip) {
      if(uzip.value==''||uzip.value==null)
    {
      alert("This Email field is required");
      return false;
    }
    var numbers = /^[0-9A-Za-z]+$/;
    if (uzip.value.match(numbers)) {
      return true;
    } else {
      alert("ZIP code must have alphanumeric characters only");
      uzip.focus();
      return false;
    }
  }
  function ValidateEmail(uemail) {
      if(uemail.value==''||uemail.value==null)
    {
      alert("This Email field is required");
      uemail.focus();
      return false;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
      return true;
    } else {
      alert("You have entered an invalid email address!");
      uemail.focus();
      return false;
    }
  }
  
  //validate reenter email
  function ValidateReEnterEmail(uemail, reenteremail) 
  {
    if(reenteremail.value==''||reenteremail.value==null)
    {
      alert("This re enter Email field is required");
      return false;
    }
    if(uemail.value==reenteremail.value)
    {
      console.log("both email same");
      return true;
    }
    else
    {
      console.log("both email DIFFERENT");
      alert("incorrect re entered email...enter again");
      return false;
    }
  }
  
  function validsex(umsex, ufsex) {
      
    x = 0;
    if (umsex.checked) {
      x++;
    }
    if (ufsex.checked) {
      x++;
    }
    if (x == 0) {
      alert("Select Male/Female");
      umsex.focus();
      return false;
    } else {
      alert("Form Succesfully Submitted");
      window.location.reload();
      return true;
    }
  }
  
  function login()
  {
    var name = document.registration.email;
    var password = document.registration.password;

    if (name.value=='simran'){
        if (password.value==123456789){
            window.alert("Welcome Simran")
        }
        else
        {
            window.alert("Wrong credentials")
        }
    }
    else
    {
        window.alert("Wrong credentials.")
    }
    
  }