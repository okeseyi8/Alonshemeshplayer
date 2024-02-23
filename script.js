

    
     const playButton = document.getElementById("play");
     const counterText = document.getElementById("counterText");
     const main_speaker = document.getElementById("main_speaker")
     const speaker_icon = document.getElementById("speaker-icon");
     const like_button = document.getElementById("like_button");
     const audio = document.getElementById("audio");
     const like_icon = document.getElementById("like_icon");
    //  const bar_fill = document.getElementById("bar_fill");
    //  const bar_dot = document.getElementById("bar_dot");
let play_icon = document.getElementById("play-icon");
let isPlaying = false;
let isMute = false;
let isLiked = false;
let counterValue = 0;
// Get the volume control elements

let seekBar = document.getElementById("seekBar");

function seek() {
  audio.volume = seekBar.value / 100;
 
 }
window.onload = function(){
  
  // play_icon.classList.replace("fa-play-circle", "fa-circle-pause");
  // playButton.click(playFunc);
  
  main_speaker.addEventListener("click", () =>{
    isMute = !isMute;
    
    if(isMute && audio){
      audio.volume = 0;
      speaker_icon.classList.replace("fa-volume-high", "fa-volume-mute");
      muteBar();
    }else if(!isMute && audio){
      audio.volume = 1;
      speaker_icon.classList.replace("fa-volume-mute", "fa-volume-high");
      loudBar();
    }
  
  })
  if (speaker_icon.classList.contains('fa-volume-mute')) {
    audio.volume = 0;
  }
function playFunc(){
  playButton.addEventListener("click", () => {
    isPlaying = !isPlaying;
    isMute = !isMute;
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

function muteBar(){
  bar_fill.style.width = 0;
  bar_dot.style.transform = "translateX(0)"
  


}
function loudBar() {
  bar_fill.style.width = "70px";
  bar_dot.style.transform = "translateX(700%)"
  
}
// loudBar();
// muteBar();

like_button.addEventListener("click", () =>{
  isLiked = !isLiked;
  if(isLiked){
    like_icon.classList.replace("fa-regular", "fa-solid")
    
    
    document.cookie = "likedStation=Israel fm; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/";

    console.log(counterValue)
  }else{
    like_icon.classList.replace("fa-solid", "fa-regular")
    
    
    document.cookie = "likedStation=; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/";


  }

})
}
