var boxes;
var message;
var win_state =[[0,1,2], [3,4,5], [6,7,8], [0,4,8], [1,4,7], [0,3,6], [2,5,8], [2,4,6]];
var change_turn = true;

window.addEventListener("DOMContentLoaded", () => {
    boxes = document.querySelector("#board");
    boxes = boxes.querySelectorAll("div");
    message = document.querySelector("#status");

    boxes.forEach(el =>{
        el.className="square";
    })

    boxes.forEach(el =>{
        el.addEventListener("click", () =>{
            if(!(el.getAttribute("class").includes("X") || el.getAttribute("class").includes("O"))){
                if(change_turn==true){
                    el.setAttribute("class","square X");
                    el.innerHTML ="X";
                    change_turn = false;
                }
                else{
                    el.setAttribute("class","square O");
                    el.innerHTML="O";
                    change_turn = true;
                }
            }
        });//end click event

        el.addEventListener("mouseover", () =>{
            el.classList.add("hover");
        });

        el.addEventListener("mouseout", () =>{
            el.classList.remove("hover");
        });
    });
});



