function makebubble(){
    let clutter = "";

for (let i = 1; i <=126; i++){
    var rn =Math.floor(Math.random()*10)
    clutter += ` <div class="bubble">${rn}</div>`;
}

document.querySelector('#pbtm').innerHTML =clutter
}


let timer =60;
function runTimer(){
let time =    setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timervalue').textContent = timer
        }
        else{
            clearInterval(time)
            document.querySelector('#pbtm').innerHTML =`<h1 style="color:black; padding-top:200px">Game Over !</h1>`
        }
        },1000)
        
       
}

let hitrn
function getnewHit(){
    hitrn =Math.floor(Math.random()*10)
    document.querySelector('#hitvalue').textContent = hitrn
    console.log(rn);
   
}



let score =0
function increaseScore(){
    score +=10;
    document.querySelector('#scoreval').textContent =score;
}


document.querySelector('#pbtm').addEventListener('click',function(dets){
    let clickedNum = Number(dets.target.textContent)
    if(clickedNum === hitrn){
        increaseScore()
        makebubble()
        getnewHit()

    }
})
runTimer()
makebubble()
getnewHit()
