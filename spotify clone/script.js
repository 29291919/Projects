console.log("Welcome TO Spotify");

//Intializie The variables
let soundIndex = 0;
let audioElement = new Audio('sounds/1.mp3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let sounds = [
    {songName: "Salam-e-Ishq", filePath: "sounds/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "sounds/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "Salam-e-Ishq", filePath: "sounds/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Salam-e-Ishq", filePath: "sounds/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Salam-e-Ishq", filePath: "sounds/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Salam-e-Ishq", filePath: "sounds/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Salam-e-Ishq", filePath: "sounds/7.mp3", coverPath: "cover/7.jpg"},
    {songName: "Salam-e-Ishq", filePath: "sounds/8.mp3", coverPath: "cover/8.jpg"},
    {songName: "love", filePath: "sounds/9.mp3", coverPath: "cover/9.jpg"},
]
songItems.forEach((element, i)=>{
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src = sounds[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = sounds[i].songName;
});

//handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime<= 0){
        audioElement.play()
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        //gif.style.opacity = 0;
    }
})
// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
  //  console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    //console.log(progress);
    //myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classlist.remove('fa-pause-circle');
        element.classlist.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        //element.classlist.add('fa-play-circle');
        //element.classlist.add('fa-pause-circle');
        //console.log(e.target);
        makeAllplays();
        soundIndex = parseInt(e.target.id),
        e.target.classlist.remove('fa-play-circle');
        e.target.classlist.add('fa-pause-circle');
        audioElement.src = 'sounds/${soundindex+1}.mp3';
        //masterSongName.innerText = sounds[soundIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');


    })
})

document.getElementById('next').addEventListener;'click',()=>{
    if(soundIndex>=9){
        soundIndex = 0
    }
    else(
        soundIndex += 1)
    }
    audioElement.src = 'sounds/${soundIndex+1}.mp3';
   // masterSongName.innerText = songs[soundIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
;

document.getElementById('previous').addEventListener('click',()=>{
    if(soundIndex<=0){
        soundIndex = 0
    }
    else(
        soundIndex -= 1
    ,
    audioElement.src = 'sounds/${soundIndex+1}.mp3')
    masterSongName.innerText = songs[soundIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    })