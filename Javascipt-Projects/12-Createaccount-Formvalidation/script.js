//1.Variable declarations:-
let form = document.getElementById('myForm');
let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');
let passwordTwoError = document.getElementById('passwordTwo-error');

//2.Function declarations:-
function validateUsername(){
    let userName = document.getElementById('account-username').value.trim(); 

if(userName == ""){
    nameError.innerHTML = "Username is required"
    return false;
}
if(!userName.match(/^[A-Za-z]+[@$*#_]+\d+$|^[A-Za-z]+\d+[@$*#_]+$/)){
    nameError.innerHTML = "Username Invalid"
    return false;
}
else{
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}
};


function validateEmail(){
    let emailId = document.getElementById('account-email').value.trim();  
if(emailId == ""){
    emailError.innerHTML = "Email is required";
    return false;
}
if(!emailId.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = "Email Invalid"
    return false;
}
else{
    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true; 
}
};

function validatePasswordOne(){
    var passwordOne = document.getElementById('account-password').value.trim(); 
   if(passwordOne == ""){
    passwordError.innerHTML = "Password is required";
    return false;
   }

   if(!passwordOne.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$*#_])[A-Za-z\d@$*#_]{8,}$/)){
passwordError.innerHTML = "Password must be 8 characters"; 
   return false;
}
 
   else{
    passwordError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
   }
};

function validatePasswordTwo(){
    var passwordTwo = document.getElementById('account-passwordTwo').value.trim();
    if(passwordTwo == ""){
        passwordTwoError.innerHTML = "Password again required"
    return false;
    }
    else if(passwordOne!== passwordTwo){
passwordTwoError.innerHTML = "Password does not match"
return false;
    }
    else{
        passwordTwoError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
}