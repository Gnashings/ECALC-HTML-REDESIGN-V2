var vid = document.getElementById("VideoPlayer");
var isPlaying;

function PlayPauseSwap() {
    isPlaying ? vid.pause() : vid.play();
  };
  
  vid.onplaying = function() {
    isPlaying = true;
  };

  vid.onpause = function() {
    isPlaying = false;
  };

function Replay() {
    vid.pause();
    vid.currentTime = 0;
    vid.play();
}