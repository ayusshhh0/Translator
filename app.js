var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-Input");
var outputDiv = document.querySelector("#output");

console.log(outputDiv)


function clickHandler(){
    outputDiv.innerText = "translated";
}

btnTranslate.addEventListener("click", clickHandler)

