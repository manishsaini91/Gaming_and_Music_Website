console.log("Welcome to Spotify");




// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Khariyat -Chichore", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Meri Zindagi Hai Tu", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Baarish", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "Mera Yaraa", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Tumbe Te Zumba", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "Kalle Kalle", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "Jugnu", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "Pathher Wargi", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    {songName: "Majnu", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
    {songName: " Thoda Thoda Pyaar - Stebin Ben", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
    {songName: " Main Janu Na - Jonita Gandhi", filePath: "songs/21.mp3", coverPath: "covers/21.jpg"},
    {songName: "Dil Diyan Gallan - Tiger Zinda Hai", filePath: "songs/22.mp3", coverPath: "covers/22.jpg"},
    {songName: "Swag Se Swagat - Tiger Zinda Hai", filePath: "songs/23.mp3", coverPath: "covers/23.jpg"},
    {songName: "Daata Tu", filePath: "songs/24.mp3", coverPath: "covers/24.jpg"},
    {songName: "Qatal- Manavgeet Gill", filePath: "songs/25.mp3", coverPath: "covers/25.jpg"},
    {songName: "Khushi Jab Bhi Teri ", filePath: "songs/26.mp3", coverPath: "covers/26.jpg"},
    {songName: "Apsraa", filePath: "songs/27.mp3", coverPath: "covers/27.jpg"},
    {songName: "Dil Galti Kar Baitha Hai", filePath: "songs/28.mp3", coverPath: "covers/28.jpg"},
    {songName: "Teri Meri Ikk Jindri", filePath: "songs/29.mp3", coverPath: "covers/29.jpg"},
    {songName: "Mere Yaaraa", filePath: "songs/30.mp3", coverPath: "covers/30.jpg"},
    {songName: "Jan Gan Man", filePath: "songs/31.mp3", coverPath: "covers/31.jpg"},
    {songName: "Qismat 2 - Mere Yaara Ve", filePath: "songs/32.mp3", coverPath: "covers/32.jpg"},
    {songName: "Dhoom Tara", filePath: "songs/33.mp3", coverPath: "covers/33.jpg"},
    {songName: "Saawariya ", filePath: "songs/34.mp3", coverPath: "covers/34.jpg"}
    


]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
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
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=33){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})