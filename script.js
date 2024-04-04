let arrayEl = ["red", "yellow", "green", "white", "orange", "blueviolet", "blue", "aqua", "cadetblue", "burlywood"]

let buttonElement = document.getElementById("buttonEl");
let buttonElement2 = document.getElementById("buttonEl2");
let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading_1");
let vr_background = document.getElementById("vr_backgroundEl");

buttonElement.onclick = function(){
    bgContainerEl.classList.add("bg_image_2");
}

buttonElement2.onclick = function(){
    let randomEl = Math.ceil(Math.random()*10)
    vr_background.style.backgroundColor = arrayEl[randomEl];
}