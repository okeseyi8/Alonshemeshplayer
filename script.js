const playButton = document.getElementById("play");
const main_speaker = document.getElementById("main_speaker")
const speaker_icon = document.getElementById("speaker-icon");
const like_button = document.getElementById("like_button");
const audio = document.getElementById("audio");
const like_icon = document.getElementById("like_icon");
let play_icon = document.getElementById("play-icon");
let isPlaying = false;
let isMute = false;
let isLiked = false;
let seekBar = document.getElementById("seekBar");

seekBar.addEventListener("input", () =>{
  const volume = parseFloat(seekBar.value) / 100;
  audio.volume = volume;
  if (volume === 0){
    speaker_icon.classList.replace("fa-volume-high", "fa-volume-mute");

  }else{
    speaker_icon.classList.replace("fa-volume-mute", "fa-volume-high");
  }
  
 })
speaker_icon.addEventListener("click", () =>{
  isMute = !isMute;
  console.log(isMute);
  if(isMute){
    speaker_icon.classList.replace("fa-volume-high", "fa-volume-mute");
    seekBar.value = 0
    audio.volume = 0;


  }else{
    seekBar.value = 100;
    audio.volume = 1;
    speaker_icon.classList.replace("fa-volume-mute", "fa-volume-high");

  }

  

})
 window.onload = function(){
  seekBar.value = 100;
  function playFunc(){
  playButton.addEventListener("click", () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        
        play_icon.classList.replace("fa-play-circle", "fa-circle-pause");
        
        audio.play();
    } else {
        if (audio) {
            audio.pause(); // Pause the audio
        }
        play_icon.classList.replace("fa-circle-pause", "fa-play-circle");
    }
});
}
playFunc();
like_button.addEventListener("click", () =>{
  isLiked = !isLiked;
  if(isLiked){
    like_icon.classList.replace("fa-regular", "fa-solid")
    document.cookie = "likedStation=Israel fm; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/";       
  }else{
    like_icon.classList.replace("fa-solid", "fa-regular")
    document.cookie = "likedStation=; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/";
  }

})
}
