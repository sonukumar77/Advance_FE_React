const wrapper = document.querySelector(".wrapper"),
inputPart = wrapper.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".info-txt"),
inputField = inputPart.querySelector("input");


inputField.addEventListener("keyup",e=>{
    // if user pressed enter btn and input value is not empty
    if(e.key == "Enter" && inputField.value != ""){
        requestApi(inputField.value);
    }
})

function requestApi(city){
 
    fetch(api).then(response => response.json()).then(result => weatherDetails(result));
    infoTxt.innerText = "Getting weather details....";
    infoTxt.classList.add("pending");
}

function weatherDetails(info){
    console.log(info)
}