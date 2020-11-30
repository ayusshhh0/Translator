var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-Input");

btnTranslate.addEventListener("click", clickHandler)

function clickHandler(){
    console.log("Clicked")
    console.log("input", textInput.value);
}