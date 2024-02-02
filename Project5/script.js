let arr = [
    {
       dp:"https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,story :"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
 
    },
    {
       dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,story :"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
 
    },
    {
       dp:"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,story :"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
 
    },
    {
       dp:"https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,story :"https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
 
    },
    {
       dp:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,story :"https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
 
    },
]

let clutter =" "
let storiyan =document.querySelector("#storiyan")
arr.forEach(function(elem,idx){
    // console.log(elem,idx);
    clutter += `<div class="story">
    <img id="${idx}"src="${elem.dp}" alt="">

</div>`
    
})
document.querySelector('#storiyan').innerHTML=clutter

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display ="block"
    document.querySelector("#full-screen").style.backgroundImage =`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector('#full-screen').style.display ="none"
    },3000)
})
