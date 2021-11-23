console.log("welcome to Tic Tac Toe")
let music = new Audio("")
let audioTurn = new Audio("")
let gameover = new Audio("")
let turn ="X"
let isgameover = false;

//function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

//function to check win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !==""){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
            isgameover=true;
        }
    })
} 

//game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            // audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})

//funtion for Reset
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(Element => {
        Element.innerText = ""
    });
    turn = "x";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})