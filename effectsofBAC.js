var stage = 0;
function NextGaugeStage() {
    if (stage != 10)
    {
        stage++;
    }

    //set the second brain image once
    document.getElementById("brain-img-2").src = "images/BrainB.png";
    document.getElementById("mood-child-2-1").innerHTML = "Happy<br>Outgoing<br>Funny";
    document.getElementById("mood-child-2-2").innerHTML = "Friendly<br>Fun";

    if (stage == 1)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(13deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(13deg)";
        GreenState();
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
    }
    if (stage == 10)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(169deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(169deg)";
    }
}

function PrevGaugeStage() {
    if (stage > 1)
    {
        stage--;
    }

    if (stage == 1)
    {
        document.getElementById("gaugedial-1").style.transform = "rotate(13deg)";
        document.getElementById("gaugedial-2").style.transform = "rotate(13deg)";
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
    }
}

function GreenState(){
    document.getElementById("brain-img-1").src = "images/BrainB.png";
    document.getElementById("mood-child-1-1").innerHTML = "Happy<br>Outgoing<br>Funny";
    document.getElementById("mood-child-1-2").innerHTML = "Friendly<br>Fun";
    document.getElementById("countdown-time").innerHTML = "0.4 - 3.3 Hours"
}

function YellowState(){
    document.getElementById("brain-img-1").src = "images/BrainC.png";
    document.getElementById("mood-child-1-1").innerHTML = "Happy<br>Outgoing<br>Slow";
    document.getElementById("mood-child-1-2").innerHTML = "Dizzy<br>Sleepy";
    document.getElementById("countdown-time").innerHTML = "4.7 - 7.5 Hours"
}

function OrangeState() {
    document.getElementById("brain-img-1").src = "images/BrainD.png";
    document.getElementById("mood-child-1-1").innerHTML = "Slow<br>Dizzy<br>Sleepy";
    document.getElementById("mood-child-1-2").innerHTML = "Clumsy<br>Nauseous";
    document.getElementById("moodtext-1").style.gridTemplateColumns = "1fr 1fr";
    document.getElementById("countdown-time").innerHTML = "8.9 - 10.3 Hours"
}

function RedState(){
    document.getElementById("brain-img-1").src = "images/BrainE.png";
    document.getElementById("mood-child-1-1").innerHTML = "Blackout<br>Sick<br>Loss of Consciousness";
    document.getElementById("mood-child-1-2").innerHTML = "";
    document.getElementById("moodtext-1").style.gridTemplateColumns = "9fr 1fr";
    document.getElementById("countdown-time").innerHTML = "11.8 Hours"
}