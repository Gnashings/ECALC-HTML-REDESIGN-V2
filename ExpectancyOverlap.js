var stage = 0;

function NextScene() {
    if (stage != 4) {
        stage++;
    }
    StageHandler();
}

function PrevScene() {
    if (stage != 0) {
        stage--;
    }
    StageHandlerReverse();
}

function StageHandler() {
    if (stage == 1) {
        StageOne();
    }
    if (stage == 2) {
        StageTwo();
    }
    if (stage == 3) {
        StageThree();
    }
    if (stage == 4) {
        StageFour();
    }
}

function StageHandlerReverse() {
    if (stage == 0) {
        StageOneRev();
    }
    if (stage == 1) {
        StageTwoRev();
    }
    if (stage == 2) {
        StageThreeRev();
    }
}

function StageInit() {
    location.reload();
}

function StageOne() {
    var alcList = document.getElementById('venn-alc-ad');
    var alcListParas = alcList.getElementsByTagName('p');

    for (i = 0; alcListParas.length > i; i++) {
        alcList.getElementsByTagName('p')[i].style = "opacity: 1";
    }
}

function StageTwo() {
    var watList = document.getElementById('venn-water-ad');
    var watListParas = watList.getElementsByTagName('p');

    for (i = 0; watListParas.length > i; i++) {
        watList.getElementsByTagName('p')[i].style = "opacity: 1";
    }
}

function StageThree() {
    var watList = document.getElementById('venn-water-ad');
    var alcList = document.getElementById('venn-alc-ad');
    var alcListParas = alcList.getElementsByTagName('p');
    var watListParas = watList.getElementsByTagName('p');
    alcList.style = "left: 100%";
    watList.style = "right: 100%";

    for (i = 0; watListParas.length > i; i++) {
        watList.getElementsByTagName('p')[i].style = "opacity: 0";
    }

    for (i = 0; alcListParas.length > i; i++) {
        alcList.getElementsByTagName('p')[i].style = "opacity: 0";
    }
    var comList = document.getElementById('venn-common');
    comList.style = "opacity: 1";
}

function StageFour() {
    //window.location.href = "Module10ExpectancyOverlapVideo.html"

}

function StageOneRev() {
    var alcList = document.getElementById('venn-alc-ad');
    var alcListParas = alcList.getElementsByTagName('p');

    for (i = 0; alcListParas.length > i; i++) {
        alcList.getElementsByTagName('p')[i].style = "opacity: 0";
    }
}

function StageTwoRev() {
    var watList = document.getElementById('venn-water-ad');
    var watListParas = watList.getElementsByTagName('p');

    for (i = 0; watListParas.length > i; i++) {
        watList.getElementsByTagName('p')[i].style = "opacity: 0";
    }
}

function StageThreeRev() {
    var watList = document.getElementById('venn-water-ad');
    var alcList = document.getElementById('venn-alc-ad');
    var alcListParas = alcList.getElementsByTagName('p');
    var watListParas = watList.getElementsByTagName('p');


    for (i = 0; watListParas.length > i; i++) {
        watList.getElementsByTagName('p')[i].style = "opacity: 1";
    }

    for (i = 0; alcListParas.length > i; i++) {
        alcList.getElementsByTagName('p')[i].style = "opacity: 1";
    }
    alcList.style = "left: 50%";
    watList.style = "right: 50%";
    var comList = document.getElementById('venn-common');
    comList.style = "opacity: 0";
}

