
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
    if (stage != 2) {
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

    vid.innerHTML = '';
    for (i = 0; i < buttonList.length; i++) {
        buttonList[i].style.visibility = "visible";
        buttonList[i].innerText = buttonList[i].id;
        if (i % 2 == 0) {
            buttonList[i].style.background = 'linear-gradient(to bottom, #02ab0d 5%, #0de31c 100%)';
            //buttonList2[i] = buttonList[i];
        }
        else
            buttonList[i].style.background = 'linear-gradient(to bottom, #fc1c03 5%, #e4685d 100%)';
        //buttonList2[i] = buttonList[i];
    }
}

function StageTwo() {
    for (k = 0; k < buttonList.length; k++) {
        buttonList[k].style.visibility = "hidden";
        window.location.href = "Module4AlcoholUnmasked2.html";
    }

    vid.innerHTML = "NO VIDEO";
}
