const input = document.querySelector("#inputText");
const btnApi = document.querySelector("#btnApi");
const output = document.querySelector("#output");
const appendInput = document.querySelector("#appendInput");
const btnAppend = document.querySelector("#btnAppend");
const btnCapitalise = document.querySelector("#btnCapitalise");

const serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getText (text){
   return serverURL + "?" + "text=" + text  
}

function apiHandler (){
    let inputText = input.value;
    fetch(getText(inputText))
    .then(response => response.json())
    
     .then (json => {output.innerText = json.contents.text

     })
}

btnApi.addEventListener('click', apiHandler)

function appendText (){
    output.innerText = output.innerText + appendInput.value
}

btnAppend.addEventListener('click', appendText)


function capitalizeText (){
    output.style.textTransform = "capitalize"
}

btnCapitalise.addEventListener('click', capitalizeText)