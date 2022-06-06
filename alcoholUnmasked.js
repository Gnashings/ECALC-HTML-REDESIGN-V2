
var buttonList = document.getElementsByClassName('AUButton');
var buttonList2 = buttonList;
var vid = document.getElementById('AUVideo');

var stage = 0;

function convertButton(thing) {
    //thing.style.background = "linear-gradient(to bottom, #02ab0d 5%, #0de31c 100%)";
    if (stage == 0) {
        console.log(thing);
        document.getElementById(thing).innerText = thing;
        document.getElementById(thing).style.background = 'linear-gradient(to bottom, #02ab0d 5%, #0de31c 100%)';
    }
}

function Next() {
    if (stage == 0) {
        StageOne();
    }
    if (stage == 1) {
        StageTwo();
    }
    if (stage == 2) {
        StageThree();
    }
    if (stage != 3) {
        stage++;
    }
}

function Prev() {
    if (stage == 1) {
        location.reload();
    }
    if (stage == 2) {
        StageOne();
    }
    if (stage != 0) {
        stage--;
    }
}

function StageOne() {

    document.getElementById("AUQuestText").style.width = "fit-content";
    document.getElementById("AUQuestTextAfter").style.width = "0%";
    document.getElementById("AUQuestText").innerText = '"Drinking alcohol makes a person..."';
    document.getElementById("AUQuestTextAfter").innerText = "";

    vid.innerHTML = '';
    for (i = 0; i < buttonList.length; i++) {
        buttonList[i].style.visibility = "visible";
        buttonList[i].innerText = buttonList[i].id;
        if (i % 2 == 0) {
            //Change color to red.
            buttonList[i].style.background = 'linear-gradient(to bottom, #fc1c03 5%, #e4685d 100%)';
            buttonList[i].style.border = '2px solid #a83328';
            //buttonList2[i] = buttonList[i];
        }
        else {
            //Change color to green.
            buttonList[i].style.background = 'linear-gradient(to bottom, #02ab0d 5%, #0de31c 100%)';
            buttonList[i].style.border = '2px solid #088a11';
            //buttonList2[i] = buttonList[i];
        }

    }
}
//test
function StageThree() {
    for (k = 0; k < buttonList.length; k++) {
        buttonList[k].style.visibility = "hidden";
        window.location.href = "Module4AlcoholUnmasked2.html";
    }

    vid.innerHTML = "NO VIDEO";
}

function StageTwo() {
    document.getElementById("AUQuestText").style.width = "49%";
    document.getElementById("AUQuestText").innerText = "Physical";

    document.getElementById("AUQuestTextAfter").style.width = "49%";
    document.getElementById("AUQuestTextAfter").innerText = "Expectancy";
}
