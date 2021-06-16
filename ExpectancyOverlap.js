var stage = 0;

function NextScene(){
    if (stage != 3)
    {
        stage++;
    }
    StageHandler();
}

function PrevScene(){
    if (stage != 0)
    {
        stage--;
    }
    StageHandler();
}

function StageHandler() {
    if (stage == 0)
    {
        StageInit();
    }
    if (stage == 1)
    {
        StageOne();
    }
    if (stage == 2)
    {
        StageTwo();
    }
    if (stage == 3)
    {
        StageThree();
    }
}

function StageInit()
{
    location.reload();
}

function StageOne(){
    var alcList = document.getElementById('venn-alc-ad');
    var alcListParas = alcList.getElementsByTagName('p');

    for(i = 0; alcListParas.length > i; i++)
    {
        alcList.getElementsByTagName('p')[i].style = "opacity: 1";
    }
}

function StageTwo(){
    var watList = document.getElementById('venn-water-ad');
    var watListParas = watList.getElementsByTagName('p');

    for(i = 0; watListParas.length > i; i++)
    {
        watList.getElementsByTagName('p')[i].style = "opacity: 1";
    }
}

function StageThree(){

}