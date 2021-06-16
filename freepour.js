var move = document.getElementById('filler');
var position = parseInt(move.style.marginBottom + 0);
var positionOne = 25;
var positionTwo = 45;
var positionThree = 60;
var positionFour = 80; 
var positionFive = 95;
var positionSix = 105;
var positionSeven = 120;

function MoveUp() {
    if (position == 0)
    {
        position = positionOne;
    }
    else if (position == positionOne)
    {
        position = positionTwo;
    }
    else if (position == positionTwo)
    {
        position = positionThree;
    }
    else if (position == positionThree)
    {
        position = positionFour;
    }
    else if (position == positionFour)
    {
        position = positionFive;
    }
    else if (position == positionFive)
    {
        position = positionSix;
    }
    else if (position == positionSix)
    {
        position = positionSeven;
    }

    //console.log("END " + position);
    move.style.marginBottom = position + "%";
    
}

function Swap(clicked_id) {
    var drinkImage = document.getElementById("filler-image");
    Reset();
    drinkImage.src = 'images/'+ clicked_id + '.png';
}

function Reset() {
    position = 0;
    move.style.marginBottom = "0%";
}



function MoveDown() {
    if (position == 0)
    {
        position = 0;
    }
    else if (position == positionOne)
    {
        position = 0;
    }
    else if (position == positionTwo)
    {
        position = positionOne;
    }
    else if (position == positionThree)
    {
        position = positionTwo;
    }
    else if (position == positionFour)
    {
        position = positionThree;
    }
    else if (position == positionFive)
    {
        position = positionFour;
    }
    else if (position == positionSix)
    {
        position = positionFive;
    }
    else if (position == positionSeven)
    {
        position = positionSix;
    }
    //console.log("END " + position);
    move.style.marginBottom = position + "%";
}

function CheckAnswer(){
    var answerBar = document.getElementById("correct-answer");
    var answerImage = document.getElementById("filler-image");
    var answerText = document.getElementById("correct-text");
    
    answerBar.style.visibility = 'visible';
    if(answerImage.src.match("images/Beer.png"))
    {
        answerBar.style.top = '38%';
        answerText.innerHTML = ' Standard Drink: Beer';
        console.log('beer');
    }
    else if(answerImage.src.match("images/Wine.png"))
    {
        answerBar.style.top = '73%';
        answerText.innerHTML = ' Standard Drink: Wine';
        console.log('wine');

    }
    else if(answerImage.src.match("images/Malt.png"))
    {
        answerBar.style.top = '55%';
        answerText.innerHTML = ' Standard Drink: Malt Beverage';
        console.log('malt');

    }
    else if(answerImage.src.match("images/Liquor.png"))
    {
        answerBar.style.top = '91%';
        answerText.innerHTML = ' Standard Drink: Liquor';
        console.log('liq');

    }
    console.log(answerImage);
}