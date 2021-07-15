var stage = 0;
var audio = new Audio();

function NextGaugeStage() {
    if (stage != 10)
    {
        stage++;
        StopSound();
        audio.currentTime = 0;
    }

    //set the second brain image once
    document.getElementById("brain-img-2").src = "images/BrainB.png";
    document.getElementById("mood-child-2-1").innerHTML = "<div>Happy</div> <div>Outgoing</div> <div>Funny</div>";
    document.getElementById("mood-child-2-2").innerHTML = "<div>Friendly</div> <div>Fun</div>";
    document.getElementById("alcohol-count-text").innerHTML = "# of Alcohol Drinks: " + stage;
    document.getElementById("placebo-count-text").innerHTML = "# of Placebo Drinks: " + stage;
    if (stage == 1)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(13deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(13deg)";
        GreenState();
        LoadAudio();
        PlaySound();
    }
    if (stage == 2)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(32deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(32deg)";
    }
    if (stage == 3)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(49deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(49deg)";
    }
    if (stage == 4)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(64deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(64deg)";
        YellowState();
        LoadAudio();
        PlaySound();
    }
    if (stage == 5)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(82deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(82deg)";
    }
    if (stage == 6)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(98deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(98deg)";
    }
    if (stage == 7)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(115deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(115deg)";
        OrangeState();
        LoadAudio();
        PlaySound();
    }
    if (stage == 8)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(131deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(131deg)";
    }
    if (stage == 9)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(147deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(147deg)";
        RedState();
        LoadAudio();
        PlaySound();
    }
    if (stage == 10)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(169deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(169deg)";
        LoadAudio();
        PlaySound();
    }
}

function PrevGaugeStage() {
    if (stage > 1)
    {
        stage--;
        StopSound();
        audio.currentTime = 0;
    }
    document.getElementById("alcohol-count-text").innerHTML = "# of Alcohol Drinks: " + stage;
    document.getElementById("placebo-count-text").innerHTML = "# of Placebo Drinks: " + stage;

    if (stage == 1)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(13deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(13deg)";
        LoadAudio();
        PlaySound();
    }
    if (stage == 2)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(32deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(32deg)";
    }
    if (stage == 3)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(49deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(49deg)";
        GreenState();
    }
    if (stage == 4)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(64deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(64deg)";
        LoadAudio();
        PlaySound();
    }
    if (stage == 5)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(82deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(82deg)";
    }
    if (stage == 6)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(98deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(98deg)";
        YellowState();
    }
    if (stage == 7)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(115deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(115deg)";
        LoadAudio();
        PlaySound();
    }
    if (stage == 8)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(131deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(131deg)";
        OrangeState();
    }
    if (stage == 9)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(147deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(147deg)";
        LoadAudio();
        PlaySound();
    }
}

function GreenState(){
    document.getElementById("brain-img-1").src = "images/BrainB.png";
    document.getElementById("mood-child-1-1").innerHTML = "<div>Happy</div> <div>Outgoing</div> <div>Funny</div>";
    document.getElementById("mood-child-1-2").innerHTML = "<div>Friendly</div> <div>Fun</div>";
    document.getElementById("countdown-time").innerHTML = "0.4 - 3.3 Hours";
    document.getElementById("moodtext-1").style = "background-color: #15d515";
}

function YellowState(){
    document.getElementById("brain-img-1").src = "images/BrainC.png";
    document.getElementById("mood-child-1-1").innerHTML = "<div>Happy</div> <div>Outgoing</div> <div style='color:red;'>Slow</div>";
    document.getElementById("mood-child-1-2").innerHTML = "<div style='color:red;'>Dizzy</div> <div style='color:red;'>Sleepy</div>";
    document.getElementById("countdown-time").innerHTML = "4.7 - 7.5 Hours";
    document.getElementById("moodtext-1").style = "border-color: #f7941e";
    document.getElementById("moodtext-1").style.backgroundColor = "#ffec2c";
}

function OrangeState() {
    document.getElementById("brain-img-1").src = "images/BrainD.png";
    document.getElementById("mood-child-1-1").innerHTML = "<div style='color:red;'>Slow</div> <div style='color:red;'>Dizzy</div> <div style='color:red;'>Sleepy</div>";
    document.getElementById("mood-child-1-2").innerHTML = "<div style='color:red;'>Clumsy</div> <div style='color:red;'>Nauseous</div>";
    document.getElementById("moodtext-1").style.gridTemplateColumns = "1fr 1fr";
    document.getElementById("countdown-time").innerHTML = "8.9 - 10.3 Hours";
    document.getElementById("moodtext-1").style = "border-color: #f15a29";
    document.getElementById("moodtext-1").style.backgroundColor = "#fbb13e";
}

function RedState(){
    document.getElementById("brain-img-1").src = "images/BrainE.png";
    document.getElementById("mood-child-1-1").innerHTML = "<div>Blackout</div> <div>Sick</div> <div>Loss of Consciousness</div>";
    document.getElementById("mood-child-1-2").innerHTML = "";
    document.getElementById("countdown-time").innerHTML = "11.8+ Hours";
    document.getElementById("moodtext-1").style = "border-color: #990b1c";
    document.getElementById("moodtext-1").style.backgroundColor = "#ed161f";
    document.getElementById("moodtext-1").style.gridTemplateColumns = "9fr 1fr";
}

function PlaySound() {
    audio.play();
}

function StopSound() {
    audio.pause();
}

function LoadAudio() {
    if (stage == 1)
    {
        audio = new Audio('Audio/BACStage1.mp3');
    }
    if (stage == 4)
    {
        audio = new Audio('Audio/BACStage4.mp3');
    }
    if (stage == 7)
    {
        audio = new Audio('Audio/BACStage7.mp3');
    }
    if (stage == 9)
    {
        audio = new Audio('Audio/BACStage9.mp3');
    }
    if (stage == 10)
    {
        audio = new Audio('Audio/BACStage10.mp3');
    }
}