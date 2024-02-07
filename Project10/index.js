let  music = new Audio('music.mp3')
let   audioturn = new Audio('ting.mp3')
let  Audiogameover = new Audio('gameover.mp3')

let gameover =false;



let turn ="X"
//  function to change turn


const changeTurn =() =>{
    return turn === "X"?"0" :"X"
}




//function to chack for a win

const checkWin = ()=>{
    let boxtext =document.getElementsByClassName('boxtext')
let wins =[
    [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
]
wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText +"  won"
        gameover =true
        document.querySelector('img').style.width ='200px'
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector(".line").style.width = "20vw";
        
    }
})


}





//Game logic
// music.play()
let box =document.getElementsByClassName('box')
Array.from(box).forEach(element =>{
    let boxtext =element.querySelector('.boxtext')
    // console.log(element);

   element.addEventListener('click',()=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText =turn;
           turn = changeTurn()
            audioturn.play()
            checkWin();
    // console.log(e);
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for  "+turn;
        }} 
    })
})



// reset button
let reset =document.querySelector('#reset')
reset.addEventListener('click',()=>{

    let boxtexts =document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element=> {
        element.innerText =""
    })
    turn ="X"
    gameover=false
        document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
        document.querySelector('img').style.width ='0px'

    
})