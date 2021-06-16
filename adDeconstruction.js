
    var buttonList = document.getElementsByClassName('ADButton');

    function convertButton1(){
        document.getElementById('ADBtn1').innerText = "People Seem More Attractive";
        document.getElementById('ADBtn1').style.background = 'linear-gradient(to bottom, #02ab0d 5%, #0de31c 100%)';
    }
    function convertButton2(){
        document.getElementById('ADBtn2').innerText = "Racy Clothes";
        document.getElementById('ADBtn2').style.background = 'linear-gradient(to bottom, #02ab0d 5%, #0de31c 100%)';
    }
    function convertButton3(){
        document.getElementById('ADBtn3').innerText = "You Become More Attractive";
        document.getElementById('ADBtn3').style.background = 'linear-gradient(to bottom, #02ab0d 5%, #0de31c 100%)';
    }
    
    
    function ChangeAllToRed(){
    
        for (i = 0; i < buttonList.length; i++)
            {
                //buttonList[i].innerText = buttonList[i].id;
                //buttonList[i].style.background = 'linear-gradient(to bottom, #02ab0d 5%, #0de31c 100%)';
                if(buttonList[i].innerText != '???')
                {
                    buttonList[i].style.background = 'linear-gradient(to bottom, #fc1c03 5%, #e4685d 100%)';
                }


            }
    }

// Get the modal
var modal = document.getElementById("ADModal");

// Get the button that opens the modal
var btn = document.getElementById("review");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("ADclose")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

