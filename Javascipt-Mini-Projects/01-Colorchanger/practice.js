const buttons = document.querySelectorAll('.button');
//console.log(buttons); //Nodelist in the browser
const body = document.querySelector('body');

//For refreshing the whole web page.
const refreshButton = document.querySelector('#refreshButton');

//Because of nodelists we can use forEach loop in the buttons
//In the forEach loop there is a callback function either arrow or normal function.
buttons.forEach((button)=>{
console.log(button);
//`event` object as a parameter.
button.addEventListener('click',(event)=>{
console.log(event);
console.log(event.target); //PointerEvent
///.(Using if condition checks)

// if(event.target.id === 'grey'){
//     body.style.backgroundColor = 'grey'
// }
// if(event.target.id === 'red'){
//     body.style.backgroundColor = 'red'
// }
// if(event.target.id === 'blue'){
//     body.style.backgroundColor = 'blue'
// }
// if(event.target.id === 'yellow'){
//     body.style.backgroundColor = 'yellow'
// }

///.Switch Cases:-
const key = event.target.id;
switch (key) {
    case 'grey':
        body.style.backgroundColor = 'grey'
        break;
        case 'red':
            body.style.backgroundColor = 'red'
            break;
            case 'blue':
                body.style.backgroundColor = 'blue'
                break;
                case 'yellow':
                    body.style.backgroundColor = 'yellow'
                    break;
                    case 'purple':
                    body.style.backgroundColor = 'purple'
                    break;


    default:
        break;
}
})
})

//`Location.reload()` is a method in javascript that which allows you to reloads the web page
refreshButton.addEventListener('click',()=>{
location.reload();
})