//1.Variable declarations:-
let form = document.getElementById('myForm');
let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');
let passwordTwoError = document.getElementById('passwordTwo-error');
let submitError = document.getElementById('submit-error');

//2.An event listener:-
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    let isUsernameValid    = validateUsername();
    let isEmailValid       = validateEmail();
    let isPasswordOneValid = validatePasswordOne();
    let isPasswordTwoValid = validatePasswordTwo(document.getElementById('account-password').value.trim());

    if (isUsernameValid && isEmailValid && isPasswordOneValid && isPasswordTwoValid) {
        // All validations passed, proceed with form submission
        form.submit() 
    } 
    else { // Or do something else
    submitError.style.display = "block";
     submitError.innerHTML = "To submit it, please fix the error"
     setTimeout(()=>{
submitError.style.display = "none"
     },3000)
       
    }
});

//3.Function declarations:-
function validateUsername(){
    let userName = document.getElementById('account-username').value.trim(); //`.trim()`method or a function  is used to remove whitespaces.

if(userName === ""){
    nameError.innerHTML = "Username is required"
    return false;
}
else if(!userName.match(/^[A-Za-z]+[@$*#_]+\d+$|^[A-Za-z]+\d+[@$*#_]+$/)){
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
if(emailId === ""){
    emailError.innerHTML = "Email is required";
    return false;
}
else if(!emailId.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = "Email Invalid"
    return false;
}
else{
    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true; 
}
};

function validatePasswordOne(){
    let passwordOne = document.getElementById('account-password').value.trim(); 
   if(passwordOne === ""){
    passwordError.innerHTML = "Password is required";
    return false;
   }

   else if(!passwordOne.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$*#_])[A-Za-z\d@$*#_]{8,}$/)){
passwordError.innerHTML = "Password must be at least 8 characters"; 
   return false;
}
 
   else{
    passwordError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
   }
};

function validatePasswordTwo(passwordOne){
    let passwordTwo = document.getElementById('account-passwordTwo').value.trim();
    if(passwordTwo === ""){
        passwordTwoError.innerHTML = "Password again required"
    return false;
    }
   if(passwordOne !== passwordTwo){
passwordTwoError.innerHTML = "Password does not match"
return false;
    }
    else{
        passwordTwoError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-
//1.Variable Declarations:
// You've declared variables to store references to various elements in your HTML form. These variables will be used to manipulate the elements in your JavaScript code.

//2.Event Listener:
// You've attached an event listener to the form element with the id myForm. This event listener listens for a form submission.
// When the form is submitted, the function provided as the second argument is executed.
// event.preventDefault() is used to prevent the form from actually submitting (which would cause a page refresh).

//3.Form Submission Handling:
// Inside the event listener function, you're calling four validation functions (validateUsername, validateEmail, validatePasswordOne, validatePasswordTwo).
// These functions check the validity of the input fields and return true if the input is valid, or false if it's not.
// If all validations pass, the form is submitted. Otherwise, an error message is displayed.

//4.Error Handling:
// If any of the validations fail, an error message is displayed to the user. The error messages are set in the respective error elements (e.g., nameError, emailError, etc.).
// If there is a validation error, the form submission is prevented.

//5.Timeout Function:
// If there is a validation error, a submit error message is displayed briefly, and then it disappears after 3 seconds.

//6.Validation Functions:
// validateUsername: Checks if the username is empty or doesn't match a specific pattern. Provides appropriate error messages.
// validateEmail: Checks if the email is empty or doesn't match a specific pattern. Provides appropriate error messages.
// validatePasswordOne: Checks if the password is empty or doesn't match a specific pattern. Provides appropriate error messages.
// validatePasswordTwo: Checks if the confirmation password matches the original password. Provides appropriate error messages.

// 7.function validateUsername()
//!userName.match(/^[A-Za-z]+[@$*#_]+\d+$|^[A-Za-z]+\d+[@$*#_]+$/)
    //0.The `!` Logical not operator  in front of `userName` means "not". So, this part is saying "if the username does not match the specified pattern..."
    //1.!userName.match():This line of code is using a regular expression( a pattern match mechanism) to check if the `userName` follows a certain format.
    //2.`/^[A-Za-z]+[@$*~_]+\d+$|^[A-Za-z]+\d+[@$*#_]+$/` This is the regular expression pattern that the userName is being compared against.
    //3.`^` This symbol ,means the start of the string.
    //4.`[A-Za-z]+`This part means the username should start one or more letters (both upper and lower case are allowed)
    //5.`[@$*#_]+`This part means that there should be one or more special characters among `@` `$` `*` `#` `_`.
    //6.`\d+`This part means that there should be one or more digits (0-9).
    //7.`$` This part means that the end of the string.
    //8.`|` This is an operator which means that either the first pattern before it or the second pattern after it should match.


// Basically This code handles form submission,
// performs validations, 
//and provides user feedback for any errors,
//encountered during the submission process. 
//If all validations pass, the form is submitted.

