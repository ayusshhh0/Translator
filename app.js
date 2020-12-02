var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-Input");
var outputDiv = document.querySelector("#output");

var ser serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text){
    return serverURL + "?"
}


function clickHandler(){
    //outputDiv.innerText = "translated";
    var inputText = txtInput.value;

    fetch()
}

btnTranslate.addEventListener("click", clickHandler)

