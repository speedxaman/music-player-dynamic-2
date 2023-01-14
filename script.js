let pause = document.getElementById("pause");
let music = document.getElementById("audio");
let rotate =document.getElementById("rotate");
let isPlaying = false;
// for playing the music 
const playMusic = ()=>{
    isPlaying = true;
    pause.classList.toggle("fa-circle-pause");
    music.play();
    rotate.classList.toggle("anime");

}
// for pausing the music 
const pauseMusic = ()=>{
    isPlaying = false;
    pause.classList.toggle("fa-circle-pause");
    music.pause();
    rotate.classList.toggle("anime");

}

pause.addEventListener("click",()=>{
    isPlaying?pauseMusic():playMusic();
});






// for liking the song 

let like = document.getElementById("like");
let liked = false;
like.onclick = ()=>{
    liked = false;
    like.classList.toggle("fa-solid");
}