    var isAnswered = false;
        
    function isRight(option){
        if (isAnswered){
            return;
        }
        if(option != optionE)
        {
            option.disabled = true;
            option.style.background = "url('images/crossmark.png') center no-repeat, url('images/" + option.id + ".png') center no-repeat";
            option.style.backgroundSize = "100%";
            option.style.color = "#ffffff";
        }
        else
        {
            document.getElementById("SDexpText").innerHTML = "Good Job! Surprising isn't it?";
            option.style.background = "url('images/checkmark.png') center no-repeat, url('images/" + option.id + ".png') center no-repeat";
            option.style.backgroundSize = "100%";
            isAnswered = true;
            //document.getElementById("optionA").disabled = true;
            //document.getElementById("optionB").disabled = true;
            //document.getElementById("optionC").disabled = true;
            //document.getElementById("optionD").disabled = true;
            //document.getElementById("optionF").disabled = true;
        }
    }
