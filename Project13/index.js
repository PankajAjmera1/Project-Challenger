let circle =document.getElementById('circle')
let up =document.getElementById('up-btn')
let down =document.getElementById('down-btn')

let rotateValue = circle.style.transform
let rotateSum ;


up.onclick =function(){
    rotateSum =rotateValue + "rotate(-90deg)"
    console.log(rotateSum);
    circle.style.transform =rotateSum
    rotateValue=rotateSum
}
down.onclick =function(){
    rotateSum =rotateValue + "rotate(90deg)"
    console.log(rotateSum);
    circle.style.transform =rotateSum
    rotateValue=rotateSum
}
