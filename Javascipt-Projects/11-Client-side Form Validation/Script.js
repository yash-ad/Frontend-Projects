//Variable declarations:-
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
    if(phone.length !== 10){ //When the length of the phone number didgits is not eqaul to 10 , there will be display "Phone no should be in 10 digits".
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
        }, 1);
        return true;
}
};

function clearForm(){
    document.getElementById('myForm').reset(); // Assuming your form has the ID 'myForm'
    let checkIcons = document.querySelectorAll('.fa-solid.fa-circle-check');
    
    checkIcons.forEach(function(icon) {
        icon.parentNode.removeChild(icon);
    });

};
