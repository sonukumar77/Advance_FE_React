const wrapper = document.querySelector(".wrapper"),
inputPart = wrapper.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".info-txt"),
inputField = inputPart.querySelector("input");

const apiKey ="6f353861c2c54bc54952bfe6f6684e2f";
inputField.addEventListener("keyup",e=>{
    // if user pressed enter btn and input value is not empty
    if(e.key == "Enter" && inputField.value != ""){
        requestApi(inputField.value);
    }
})

function requestApi(city){
    let api =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(api).then(response => response.json()).then(result => weatherDetails(result));
    infoTxt.innerText = "Getting weather details....";
    infoTxt.classList.add("pending");
}

function weatherDetails(info){
    console.log(info)
}