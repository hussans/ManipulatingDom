let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");

let change1 = document.getElementById("change1");
let change2 = document.getElementById("change2");
let change3 = document.getElementById("change3");
let change4 = document.getElementById("change4");
let change5 = document.getElementById("change5");
let change6 = document.getElementById("change6");
let change7 = document.getElementById("change7");
let change8 = document.getElementById("change8");
let change9 = document.getElementById("change9");
let change10 = document.getElementById("change10");

btn1.addEventListener('click', function(event){
    change1.innerText = "Hello Ken.";
    change1.className = 'barrelRoll';
});

btn2.addEventListener('click', function(event){
    change2.innerText = "Hello Isaiah.";
    change2.className = 'shake';
});

btn3.addEventListener('click', function(event){
    change3.innerText = "Hello Jacob.";
    change3.className = 'wiggle';
});

btn4.addEventListener('click', function(event){
    change4.innerText = "Hassan";
    change4.className = 'slideUp';
});

btn5.addEventListener('click', function(event){
    change5.innerText = "Nathan";
    change5.className = 'zoomer';
});

btn6.addEventListener('click', function(event){
    change6.innerText = "LeBron James";
    change6.className = 'heartbeat';
});

btn7.addEventListener('click', function(event){
    change7.innerText = "Basketball";
    change7.className = 'sideToSide';
});

btn8.addEventListener('click', function(event){
    change8.innerText = "I Love Tacos!";
    change8.className = 'floater';
});

btn9.addEventListener('click', function(event){
    change9.innerText = "CodeStack Academy";
    change9.className = 'slideDown';
});

btn10.addEventListener('click', function(event){
    change10.innerText = "Manipulating the Dom";
    change10.className = 'rotateIn';
});