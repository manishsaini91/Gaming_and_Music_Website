let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs=[{songName :"Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName :"Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName :"Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName :"Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName :"Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName :"Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName :"Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName :"Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName :"Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName :"Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"}]


songItems.forEach((element, i)=>{ 
  element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})



masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity = 1;
  }
  else{
      audioElement.pause();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
      gif.style.opacity = 0;
  }
})

