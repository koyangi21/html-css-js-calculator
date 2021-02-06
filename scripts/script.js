//-------------------------------------------------------------
//
//  setup elements
//
//--------------------------------------------------------------

//Output display
const display = document.querySelector('.display');
// Number keys
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
// Function keys
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const times = document.querySelector('#times');
const divi = document.querySelector('#divide');
const clear = document.querySelector('#clear');
const enter = document.querySelector('#enter');

//-------------------------------------------------------------
//
//  setup event listeners
//
//--------------------------------------------------------------

one.addEventListener("click", oneFunc);
two.addEventListener("click", twoFunc);
three.addEventListener("click", threeFunc);
four.addEventListener("click", fourFunc);
five.addEventListener("click", fiveFunc);
six.addEventListener("click", sixFunc);
seven.addEventListener("click", sevenFunc);
eight.addEventListener("click", eightFunc);
nine.addEventListener("click", nineFunc);
zero.addEventListener("click", zeroFunc);

plus.addEventListener("click", plusFunc);
minus.addEventListener("click", minusFunc);
times.addEventListener("click", timesFunc);
divi.addEventListener("click", diviFunc);
clear.addEventListener("click", clearFunc);
enter.addEventListener("click", enterFunc);

document.addEventListener("keypress", getKey);

//-------------------------------------------------------------
//
//  setup global variables
//
//--------------------------------------------------------------

let displayValue = 0;
let funcValue = "";
let firstValue = 0;
let secondValue = 0;

//-------------------------------------------------------------
//
//  define math functions
//
//--------------------------------------------------------------

function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return (x / y).toPrecision(4);
}

function operate(x,y,funct) {
    return window[funct](x,y);
}

//-------------------------------------------------------------
//
//  define event functions
//
//--------------------------------------------------------------

function updateDisplay() {
    display.textContent = displayValue;
}

// number functions

function oneFunc(){
    if (displayValue == ""){
        displayValue = "1";
        updateDisplay()
        return;
    }
    displayValue = displayValue + 1;
    updateDisplay();
    return;
}

function twoFunc(){
    if (displayValue == ""){
        displayValue = "2";
        updateDisplay()
        return;
    }
    displayValue = displayValue + 2;
    updateDisplay();
    return;
}

function threeFunc(){
    if (displayValue == ""){
        displayValue = "3";
        updateDisplay()
        return;
    }
    displayValue = displayValue + 3;
    updateDisplay();
    return;
}

function fourFunc(){
    if (displayValue == ""){
        displayValue = "4";
        updateDisplay()
        return;
    }
    displayValue = displayValue + 4;
    updateDisplay();
    return;
}

function fiveFunc(){
    if (displayValue == ""){
        displayValue = "5";
        updateDisplay()
        return;
    }
    displayValue = displayValue + 5;
    updateDisplay();
    return;
}

function sixFunc(){
    if (displayValue == ""){
        displayValue = "6";
        updateDisplay()
        return;
    }
    displayValue = displayValue + 6;
    updateDisplay();
    return;
}

function sevenFunc(){
    if (displayValue == ""){
        displayValue = "7";
        updateDisplay()
        return;
    }
    displayValue = displayValue + 7;
    updateDisplay();
    return;
}

function eightFunc(){
    if (displayValue == ""){
        displayValue = "8";
        updateDisplay()
        return;
    }
    displayValue = displayValue + 8;
    updateDisplay();
    return;
}

function nineFunc(){
    if (displayValue == ""){
        displayValue = "9";
        updateDisplay()
        return;
    }
    displayValue = displayValue + 9;
    updateDisplay();
    return;
}

function zeroFunc(){
    if (displayValue == ""){
        displayValue = "0"
        updateDisplay()
        return;
    }
    if (displayValue == "0") return;
    displayValue = displayValue + 0;
    updateDisplay();
    return;
}

// operation functions

function plusFunc(){
    firstValue = displayValue;
    funcValue = "add";
    displayValue = "";
    updateDisplay();
    document.getElementById("plus").style.backgroundColor = "#ffe6e6";
    return;
}

function minusFunc(){
    firstValue = displayValue;
    funcValue = "subtract";
    displayValue = "";
    updateDisplay();
    document.getElementById("minus").style.backgroundColor = "#ffe6e6";
    return;
}

function timesFunc(){
    firstValue = displayValue;
    funcValue = "multiply";
    displayValue = "";
    updateDisplay();
    document.getElementById("times").style.backgroundColor = "#ffe6e6";
    return;
}

function diviFunc(){
    firstValue = displayValue;
    funcValue = "divide"
    displayValue = "";
    updateDisplay();
    document.getElementById("divide").style.backgroundColor = "#ffe6e6";
    return;
}

function clearFunc(){
    firstValue = 0;
    secondValue = 0;
    displayValue = "";
    funcValue = "";
    updateDisplay();
    document.getElementById("plus").style.backgroundColor = "white";
    document.getElementById("minus").style.backgroundColor = "white";
    document.getElementById("times").style.backgroundColor = "white";
    document.getElementById("divide").style.backgroundColor = "white";
    return;
}

function enterFunc(){
    if (firstValue == 0) return;
    firstValue = parseInt(firstValue)
    secondValue = parseInt(displayValue);
    answer = operate(firstValue,secondValue,funcValue);    
    displayValue = answer;
    updateDisplay();
    firstValue = 0;
    secondValue = 0;
    displayValue = 0;
    funcValue = "";
    document.getElementById("plus").style.backgroundColor = "white";
    document.getElementById("minus").style.backgroundColor = "white";
    document.getElementById("times").style.backgroundColor = "white";
    document.getElementById("divide").style.backgroundColor = "white";
    return;
}




function getKey(e){
    if (e.key == "1"){
        oneFunc();
        return;
    } else if (e.key == "2") {
        twoFunc();
        return;
    } else if (e.key == "3") {
        threeFunc();
        return;
    } else if (e.key == "4") {
        fourFunc();
        return;
    } else if (e.key == "5") {
        fiveFunc();
        return;
    } else if (e.key == "6") {
        sixFunc();
        return;
    } else if (e.key == "7") {
        sevenFunc();
        return;
    } else if (e.key == "8") {
        eightFunc();
        return;
    } else if (e.key == "9") {
        nineFunc();
        return;
    } else if (e.key == "0") {
        zeroFunc();
        return;
    } else if (e.key == "+") {
        plusFunc();
        return;
    } else if (e.key == "-") {
        minusFunc();
        return;
    } else if (e.key == "*") {
        timesFunc();
        return;
    } else if (e.key == "/") {
        diviFunc();
        return;
    } else if (e.key == "Enter") {
        enterFunc();
        return;
    }
    return;
}

clearFunc();



// ---Tests
//console.log('Add (1,2):');
//console.log(operate(1,2,'add'));

//console.log('Subtract (1,2):');
//console.log(operate(1,2,'subtract'));

//console.log('Multiply (1,2):');
//console.log(operate(1,2,'multiply'));

//console.log('Divide (2,1):');
//console.log(operate(2,1,'divide'));