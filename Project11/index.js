let songIndex =0
let audioElement =new Audio('songs/1.mp3')
// audioElement.play()

let masterPlay =document.getElementById('masterPlay')

let myProgressBar = document.getElementById('myProgressbar')
let mastersongname = document.getElementById('mastersongname')
let gif =document.getElementById('gif')

let songsItems = Array.from(document.getElementsByClassName('songitem'))
 
let songs=[
    {songName :"Hooooo",filePath: "songs/1.mp3" ,coverPath :"covers/1.jpg"},
    {songName :"name 2",filePath: "songs/2.mp3" ,coverPath :"covers/2.jpg"},
    {songName :"Name 3",filePath: "songs/3.mp3" ,coverPath :"covers/3.jpg"},
    {songName :"Name 4",filePath: "songs/4.mp3" ,coverPath :"covers/4.jpg"},
    {songName :"Name 5",filePath: "songs/5.mp3" ,coverPath :"covers/5.jpg"},
    {songName :"Name 6",filePath: "songs/6.mp3" ,coverPath :"covers/6.jpg"}
]

songsItems.forEach((element,i)=>{
element.getElementsByTagName('img')[0].src =songs[i].coverPath  
element.getElementsByClassName("songname")[0].innerText = songs[i].songName
})







// Handle play /pauese clcik
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime <0){
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity =1
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity =0
    }
})

audioElement.addEventListener('timeupdate',()=>
{

//update seeker
progress =parseInt((audioElement.currentTime/audioElement.duration)*100)
myProgressBar.value =progress
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =myProgressBar.value * audioElement.duration/100
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>
    {   makeAllPlays()
        songIndex =parseInt(e.target.id)
        gif.style.opacity =1

        e.target.classList.remove('fa-play-circle')
        
        e.target.classList.add('fa-pause-circle')
        audioElement.src =`songs/${songIndex+1}.mp3`
        mastersongname.innerText =songs[songIndex].songName
        audioElement.currentTime=0
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')

    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>5){
        songIndex=0
    }
    else{
        songIndex +=1
    }

    audioElement.src =`songs/${songIndex+1}.mp3`
    mastersongname.innerText =songs[songIndex].songName

    audioElement.currentTime=0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex +=1
    }

    audioElement.src =`songs/${songIndex+1}.mp3`
    mastersongname.innerText =songs[songIndex].songName
    audioElement.currentTime=0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
})