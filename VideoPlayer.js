var vid = document.getElementById("VideoPlayer");
var isPlaying;

vid.onplaying = function() {
    isPlaying = true;
}

vid.onpause = function () {
    isPlaying = false;
}

function playVid() { 
  vid.play(); 
} 

function pauseVid() { 
  vid.pause();
} 

function PlayPauseSwap() {
    if (isPlaying = true)
    {
        pauseVid();
        console.log(isPlaying);
    }
    else if (isPlaying = false)
    {
        playVid();
        console.log(isPlaying);
    }
}