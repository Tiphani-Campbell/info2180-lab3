var boxes;
var message;

window.addEventListener("DOMContentLoaded", () => {
boxes = document.querySelector("#board");
boxes = boxes.querySelectorAll("div");
message = document.querySelector("#status");

boxes.forEach(el =>{
    el.className="square";
})
});



