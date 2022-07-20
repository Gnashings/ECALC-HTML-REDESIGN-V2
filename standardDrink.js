var isAnswered = false;
answerAudio = new Audio("Audio/sound 28.mp3");
function isRight(option) {
    if (isAnswered) {
        return;
    }
    if (option.id != "OptionE") {
        option.disabled = true;
        option.style.background = "url('images/crossmark.png') center no-repeat, url('images/" + option.id + ".png') center no-repeat";
        option.style.backgroundSize = "100%";
        option.style.color = "#ffffff";
    }
    else {
        answerAudio.play();
        option.style.background = "url('images/checkmark.png') center no-repeat, url('images/" + option.id + ".png') center no-repeat";
        option.style.backgroundSize = "100%";
        document.getElementById("SDexplanation").style.opacity = 1;
        isAnswered = true;
    }
}
