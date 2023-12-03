//Lets create a dynamic rows and cells:-
let cols = 100; //we want 100 cols.
let rows = 26;  //we want 26 rows because A to Z there are 26 characters.
let cellsCont = document.querySelector('.cells-cont');
let addressBar = document.querySelector('.address-bar');

//Here we are using for-loop to updates and iterates the value dynamically to add and update the UI of rows and columns.
let addressColCont = document.querySelector('.address-col-cont');
for(let i = 0; i < cols; i++){
let addressCol = document.createElement('div');
addressCol.setAttribute('class','address-col')
addressCol.innerText = i + 1;     //Because it starts from 1.
addressColCont.appendChild(addressCol);
};


let addressRowCont = document.querySelector('.address-row-cont');
for(let i = 0; i < rows; i ++){
    let addressRow = document.createElement('div');
    addressRow.setAttribute('class','address-row');
    addressRow.innerText =  String.fromCharCode(65 + i)
    addressRowCont.appendChild(addressRow);
};


//Lets create a nested for-loop to  create  rows and cells dynamically

for(let i = 0; i < cols; i++){
    let colsCont = document.createElement('div');
    colsCont.setAttribute('class','cols-cont');
  for(let j = 0; j < rows; j++){
let cell = document.createElement('div');
cell.setAttribute('class','cell');
colsCont.appendChild(cell);
editTheAddressBar(cell,i,j);
  }
cellsCont.appendChild(colsCont);
}


function editTheAddressBar(cell,i,j){

}