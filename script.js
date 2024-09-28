let buttons=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let msg=document.querySelector("#msg");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let game=document.querySelector(".game");

let turnX=true;
let patterns =[[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,4,2],[6,7,8],[1,4,7],[2,5,8]];

newgame.addEventListener("click" , () => {
    buttons.forEach((button) => {
        button.innerText="";
        button.disabled=false;
 })
 msgcontainer.classList.add("hide");
 turnX=false;
})
resetbtn.addEventListener("click", () => {
    buttons.forEach((button) => {
           button.innerText="";
           button.disabled=false;
    })
    msgcontainer.classList.add("hide");
    turnX=true;
})
let cnt=0;
buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        if(turnX==true){
            button.innerText="X";
            turnX=false
        }
        else{
            button.innerText="O";
            turnX=true;
        }
        button.disabled=true;
        cnt++;
        checkWinner();
        if(cnt==0){
            console.log("Tie");
        }
    })
}) 
const disabledButton = () => {
    for(button of buttons){
        button.disabled=true;
    }
}
const showWinner = (val) => {
    msg.innerText="Congratulations, Winner is "+val;
    msgcontainer.classList.remove("hide");
}

const checkWinner = () => {
    for(pattern of patterns){
        let pos1=buttons[pattern[0]].innerText;
        let pos2=buttons[pattern[1]].innerText;
        let pos3=buttons[pattern[2]].innerText;

        if(pos1 && pos2 && pos3 && pos1==pos2 && pos2==pos3){
            showWinner(pos1);
            disabledButton();
        }
    }
}