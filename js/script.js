var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var password = document.getElementById("password");

function ValidateEmail(eemail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eemail))
  {
    return (true)
  }
    return (false)
}

function validateForm(){
    var fName  = document.getElementById('Fname').value;
    var lName  = document.getElementById('Lname').value;
    var mail  = document.getElementById('mail').value;
    var pass  = document.getElementById('passw').value;

    //First Name
    if(fName == "" && firstName.classList.contains("dnon")){
        firstName.classList.remove("dnon","no-error-margin");
        firstName.classList.add("error");
    }
    else if(fName != "" && firstName.classList.contains("error") ){
        firstName.classList.add("dnon","no-error-margin");
        firstName.classList.remove("error");
    }

    //Last Name
    if(lName == "" && lastName.classList.contains("dnon")){
        lastName.classList.remove("dnon","no-error-margin");
        lastName.classList.add("error");
    }
    else if(lName != "" && lastName.classList.contains("error") ){
        lastName.classList.add("dnon","no-error-margin");
        lastName.classList.remove("error");
    }

    //Email
    
    if(mail != "" || email.classList.contains("error") ){
        console.log(11);
        if(ValidateEmail(mail) == false){
            document.getElementById("email-p").innerHTML = "This Email is not valid"
            email.classList.remove("dnon","no-error-margin");
            email.classList.add("error");
            
        }
        
        else{
            email.classList.add("dnon","no-error-margin");
            email.classList.remove("error");

        }
        //document.getElementById("email-p").innerHTML = "This Email is not valid."
    }
    else if(mail == "" || email.classList.contains("dnon")){
        document.getElementById("email-p").innerHTML = "Email cannot be empty";
        email.classList.remove("dnon","no-error-margin");
        email.classList.add("error");
    }
    //Password
    if(pass == "" && password.classList.contains("dnon")){
        password.classList.remove("dnon","no-error-margin");
        password.classList.add("error");
    }
    else if(pass != "" && password.classList.contains("error") ){
        password.classList.add("dnon","no-error-margin");
        password.classList.remove("error");
    }
}
