let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#newgame");
let msgbox=document.querySelector(".msg-box");
let msg=document.querySelector("#msg");

let turnX=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="X";
            turnX=false;
        }else{
            box.innerText="O";
            turnX="true";
        }
        box.disabled=true;

        checkwinner();
    });
});


const showwinner= (Won) =>{
    msg.innerText = `Congratulations the winner is ${Won}`
    msgbox.classList.remove("hide");
    for(let box of boxes){
        box.disabled=true;
    }
};

const checkwinner=()=>{
    for(let pattern of winpatterns){
        let poval1=boxes[pattern[0]].innerText;
        let poval2=boxes[pattern[1]].innerText;
        let poval3=boxes[pattern[2]].innerText;

        if(poval1!="" && poval2!="" && poval3!=""){
            if(poval1===poval2 && poval2===poval3){
                console.log("Winner",poval1);
                showwinner(poval1);
            }
        }
    }
}

const reset=() =>{
    turnX=true;
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    msgbox.classList.add("hide");
}

resetbtn.addEventListener("click", reset);
