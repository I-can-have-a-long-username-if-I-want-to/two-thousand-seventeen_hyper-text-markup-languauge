/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var n1;
var n2;
var value;
var result;

function handleClick() {
    n1=parseInt(document.getElementById("pre-text").value);
    n2=parseInt(document.getElementById("post-text").value);
    if (selectValue === "add"){
    result = parseInt(n1+n2);
} else if(selectValue === "subtract"){
    result = parseInt(n1-n2);
} else if(selectValue === "multiply"){
    result = parseInt(n1*n2);
} else if(selectValue === "divide"){
    if(n2 != 0){
    result = parseInt(n1/n2);
    } else {
        alert("DIVID BI ZERO EARROR!");
        alert("enjoy your fork bomb");
//        die();
        window.location.href = "https://www.example.com";
    }
} else if(selectValue === "cm-m"){
    result = parseInt(n1*100);
} else{
    result = "error";
}
}
function cetvalue() {
    selectValue=document.getElementById("operators").value; 
}
function die () {
  setTimeout(function () {die(); die()}, 0);
}
function init() {
    var button = document.getElementById(); 
    button.onclick=handleClick;
}
window.onload = init; 