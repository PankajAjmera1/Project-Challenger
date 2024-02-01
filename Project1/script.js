let isstatus = document.querySelector("h5")

let addbutton =document.querySelector('#add')

let check =false
addbutton.addEventListener("click",function(){
  if(check ==false){
    isstatus.innerHTML ="Friends"
    isstatus.style.color ="green"
    addbutton.innerHTML ="Remove Friend"
    addbutton.style.background ="#dadada"
    addbutton.style.color ="Black"
    check =true
  }else{
    isstatus.innerHTML ="Stranger"
    isstatus.style.color ="red"
    addbutton.innerHTML ="Add Friend"
    addbutton.style.background ="cadetblue"
    addbutton.style.color ="White"

    check =false
  }

})