//Variable declarations:-(To display error)
let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

//Function declarations:-
//1.
function validateName(){
    let name = document.getElementById('contact-name').value;

    if(name.length == ""){
nameError.innerHTML = "Name is required";
return false;
    }

if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = "Fullname is required"
    return false;
}
    
    else{
        nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
};

//2.
function validatePhone(){
    let phone = document.getElementById('contact-phone').value;

    if(phone.length == ""){  //Whether the phone number is empty it will display the "Phone no is required".
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    if(phone.length !== 10){ //When the length of the phone number digits is not eqaul to 10 , there will be display "Phone no should be in 10 digits".(`using` strict inequality operator !==)
        phoneError.innerHTML = "Phone no should be in 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) { //Checking:-The Phone number is between 0 to 9 and for 10 characters , there will be display "Only digits please".  
        phoneError.innerHTML = "Only digits please";
        return false;
    }
    else{
        phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
}

//3.
 function validateEmail(){
    let email = document.getElementById('contact-email').value; //It will store the value, written in the input of variable called `email` 

    if(email.length == ""){
        emailError.innerHTML = "Email is required";
        return false;
            };
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){ //It should contain alphabet and it may contain `.` or `_` and it can also contain any numeric and thereafter `@` thereafter some aplhabets and then `.` another alphabet it could be two,three or four characters.
        emailError.innerHTML = "Email Invalid";
        return false;
    }
    else{
       emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
 };

 //4.
 function validateMessage(){
let message = document.getElementById('contact-message').value;
let requiredCharacters = 30; //30 characters is required.
let remainingCharacters = requiredCharacters - message.length; //left (remaining) characters while user typing - message (How much characters is left)
 
if(message == ""){
    messageError.innerHTML = "Message is required"
    return false;
 }
if(remainingCharacters > 0){
    messageError.innerHTML = remainingCharacters + ' more characters are required';
    return false;
}
    messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;

 }

 //5.
 function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = "To submit it, please fix the error."
        setTimeout(()=>{
            submitError.style.display = "none";
        },3000)
        return false;
}
else {
    clearForm(); // Assuming you have a clearForm() function
        setTimeout(() => {
            alert("Form submitted successfully");
            document.getElementById('myForm').submit(); // Assuming your form has the ID 'myForm'
        }, 0);
        return true;
}
};

//6.
function clearForm(){
    document.getElementById('myForm').reset(); // Assuming your form has the ID 'myForm'
    let checkIcons = document.querySelectorAll('.fa-solid.fa-circle-check');
    
   checkIcons.forEach((icon)=>{
icon.parentNode.removeChild(icon)
   })
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-

//1.Variable Declarations:-
//nameError, phoneError, emailError, messageError, and submitError are,
//variables that hold references to specific elements in the HTML document.
//These elements are likely used to display error messages.

//2.Function validateName():-
// This function is responsible for validating the input for the "name" field in the form.
// It retrieves the value of the "contact-name" input field.
// If the field is empty, it sets an error message in the nameError element and returns false.
// If the name does not match a specific pattern (a space-separated full name), it sets a different error message.
// If the input is valid, it sets a checkmark icon in the nameError element and returns true.

//3.Function validatePhone():-
// This function is responsible for validating the input for the "phone" field in the form.
// It retrieves the value of the "contact-phone" input field.
// It checks for various conditions such as empty field, length not equal to 10, and whether it consists only of digits.
// It updates the phoneError element accordingly with error messages or a checkmark icon.
// It returns true if the input is valid, and false otherwise.

//4.Function validateEmail():-
// This function is responsible for validating the input for the "email" field in the form.
// It retrieves the value of the "contact-email" input field.
// It checks for conditions like an empty field and a specific email pattern using a regular expression.
// It updates the emailError element accordingly with error messages or a checkmark icon.
// It returns true if the input is valid, and false otherwise.

//5.Function validateMessage():
// This function is responsible for validating the input for the "message" field in the form.
// It retrieves the value of the "contact-message" input field.
// It checks for conditions like an empty field and whether the message has a minimum required character count.
// It updates the messageError element accordingly with error messages or a checkmark icon.
// It returns true if the input is valid, and false otherwise.

//6.Function validateForm():-
// This function is called when the form is submitted.
// It calls the individual validation functions and checks if any of them return false. 
// If any of them do, it displays an error message and returns false.
// If all validations pass, it assumes there's a clearForm() function  to reset the form, 
// and then it alerts a success message and submits the form.

//7.Function clearForm():-
// This function is used to reset the form. 
// It assumes there's a form with the ID 'myForm'.
// It also removes any checkmark icons (assuming they are used to indicate successful validation).




