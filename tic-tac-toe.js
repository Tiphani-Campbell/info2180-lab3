var boxes;
var message;
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
            findwinner(boxes, message);
        });//end click event

        el.addEventListener("mouseover", () =>{
            el.classList.add("hover");
        });//end mouseover

        el.addEventListener("mouseout", () =>{
            el.classList.remove("hover");
        });//end mouseout
    });//end for each box
});// end document loading

const findwinner = function(box, mess_box){
    if(box[0].innerHTML===box[1].innerHTML && box[1].innerHTML===box[2].innerHTML){
        win_message(mess_box, box[0].innerHTML);
    }else if(box[3].innerHTML===box[4].innerHTML && box[4].innerHTML===box[5].innerHTML){
        win_message(mess_box, box[3].innerHTML);
    }else if(box[6].innerHTML===box[7].innerHTML && box[7].innerHTML===box[8].innerHTML){
        win_message(mess_box, box[6].innerHTML);
    }else if(box[0].innerHTML===box[3].innerHTML && box[3].innerHTML===box[6].innerHTML){
        win_message(mess_box, box[0].innerHTML);
    }else if(box[1].innerHTML===box[4].innerHTML && box[4].innerHTML===box[7].innerHTML){
        win_message(mess_box, box[1].innerHTML);
    }else if(box[2].innerHTML===box[5].innerHTML && box[5].innerHTML===box[8].innerHTML){
        win_message(mess_box, box[2].innerHTML);
    }else if(box[0].innerHTML===box[4].innerHTML && box[4].innerHTML===box[8].innerHTML){
        win_message(mess_box, box[0].innerHTML);
    }else if(box[2].innerHTML===box[4].innerHTML && box[4].innerHTML===box[6].innerHTML){
        win_message(mess_box, box[2].innerHTML);
    }
};//end winner check

const win_message = function(messagebox, X_O){
    messagebox.setAttribute("class", "you-won");
    messagebox.innerHTML = `Congratulations! ${X_O} is the Winner!`;
}; // end display winner message


