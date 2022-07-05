const calcScreen = document.querySelector('#screen');
let displayVal = '0';
const handleKeys = (val) => {
    if(displayVal == 0 && val == '.') displayVal = '0.';
    else if(displayVal == 0 && displayVal.length == 1) displayVal = val;
    else displayVal += val; 
    calcScreen.innerHTML = displayVal;
}
const handleSubmit = () => {
    document.querySelector('#problem').innerHTML = displayVal;
    displayVal = eval(displayVal);
    calcScreen.innerHTML = displayVal;
    document.querySelector('#solution').innerHTML = displayVal;
}
const handleDelete = () => {
    displayVal.length > 1 ? displayVal = displayVal.slice(0,-1) : displayVal = 0 ;
    calcScreen.innerHTML = displayVal;
}
const clearScreen = () => {
    displayVal = '0';
    calcScreen.innerHTML = displayVal;
    document.querySelector('#problem').innerHTML = '';
    document.querySelector('#solution').innerHTML = '';
}
//Custom funcs
const getSquare = () =>{
    displayVal *= displayVal;
    calcScreen.innerHTML = displayVal;
}
const getPercent = () =>{
    displayVal = displayVal / 100;
    calcScreen.innerHTML = displayVal;
}