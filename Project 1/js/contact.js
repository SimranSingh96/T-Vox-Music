function formvalidation() {
    event.preventDefault();
    var uemail = document.registration.email;
    var ufirst_name = document.registration.First_name;
    var ulast_name = document.registration.Last_name;
    var umobilenumber = document.registration.mobile_number;
if((uemail.value==''||uemail.value==null)
&&(ufirst_name.value==''||ufirst_name.value==null)
&&(ulast_name.value==''||ulast_name.value==null)&&
(umobilenumber.value==''||umobilenumber.value==null))  
{
    alert("All field are required field..");
    return false;
}  
    if (ValidateEmail(uemail)) {
        if (ValidateAllCharcter(ufirst_name)) {
            if (ValidateAllCharcter(ulast_name)) {
                if (allnumeric(umobilenumber)) {
                  alert("enquiry submitted");
                }
           
            }
        }
    }
    return false;
    }

// email validation
function ValidateEmail(uemail)
{
  if(uemail.value==''||uemail.value==null)
  {
    alert("This Email field is required");
    return false;
  }
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat))
  {
    return true;
  }
  else 
  {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}


//validate first and last name
function ValidateAllCharcter(uname) {
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


//validate mobile number
function allnumeric(umobilenumber) 
{
  if(umobilenumber.value==''||umobilenumber.value==null)
  {
    alert("This mobile num is required");
    return false;
  }
    var numbers =/^\d{10}$/;
    if(umobilenumber.value.match(numbers))
    {
    return true;
    }
    else
    {
    alert('This field must have numeric characters only');
    uzip.focus();
    return false;
    }
}

