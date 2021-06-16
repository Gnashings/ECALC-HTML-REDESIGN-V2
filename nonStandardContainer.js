// Get the modal
var modal = document.getElementById("drink-modal");
var modalimg = document.getElementById("drink-modal-img");
var currentIDDrink;
let drinks = [
  ['Daiquiri','x 1.5'],
  ['Martini Traditional', 'x 1.2'],
  ['Pina Colada', 'x 2'],
  ['Boot of Beer', 'x 5-6'],
  ['Cosmopolitan', 'x 1.3'],
  ['Margarita', 'x 1.7'],
  ['Gin and Tonic', 'x 1.6'],
  ['Manhattan', 'x 2.5'],
  ['Screwdriver', 'x 1.3'],
  ['Mojito', 'x 1.3'],
  ['Long Island', 'x 1.5-4'],
  ['Lemon Drop', 'x 2.2'],
  ['Pitcher of Beer', 'x 4-5'],
  ['Dry Martini', 'x 1.4'],
  ['Yard of beer', 'x 5-6'],
  ['Vodka Tonic', 'x 1.3'],
];
// Get the button that opens the modal
//var btn = document.getElementById("review");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("drink-modal-close")[0];

function PopUpModal(clicked_id)
{
    var removeHyphen=clicked_id;
    var imageID=clicked_id;

    imageID = imageID.replace(/-/g, "")
    var drinkDescID = clicked_id.toLowerCase() + "-description";
    console.log(drinkDescID);
    currentIDDrink = removeHyphen.replace(/-/g, " ");
    modal.style.display = "block";
    document.getElementById("drink-modal-header").innerHTML = currentIDDrink;
    modalimg.src = "images/container"+imageID+".png";
    document.getElementById("drink-modal-descriptor").innerHTML = document.getElementById(drinkDescID).innerHTML;
    document.getElementById("drink-modal-reveal").innerHTML = "x ?";
}

span.onclick = function() {
    modal.style.display = "none";
}

function Reveal() {

  for (i = 0; i < drinks.length; i++) {
    if(currentIDDrink == drinks[i][0])
    {
      document.getElementById("drink-modal-reveal").innerHTML = drinks[i][1];
      return;
    }
    else{
      document.getElementById("drink-modal-reveal").innerHTML = "NOT FOUND";
      console.log(drinks[i][0]);
      console.log(currentIDDrink);
    }
  }

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }