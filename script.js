let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newbtn = document.querySelector(".new-btn");
let msgCon = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turnO = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const disableBox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
    
}
const enableBox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    
}
const restGame = ()=>{
    let turnO = true;
    enableBox();
    msgCon.classList.add("hide");
}
const showWin = (winner)=>{
   msg.innerText = `Congratulations, Winner is ${winner}`;
   msgCon.classList.remove("hide");
   disableBox();
}
const checkWin = ()=>{
for(let pattern of winpattern){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if(pos1Val != "" && pos2Val != ""&& pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWin(pos1Val);
        }
    }
}
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turnO){
        box.innerText = "O";
        turnO = false;
    }else{
        box.innerText = "X";
        turnO = true;
        }
        box.disabled = true;
        checkWin();
    })
});
newbtn.addEventListener( "click",restGame);
resetbtn.addEventListener( "click",restGame);