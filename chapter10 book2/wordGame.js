let replaceButton = document.getElementById("replaceButton");
replaceButton.addEventListener("click", replaceIt);
function replaceIt() {
  let storyDiv = document.getElementById("story");
  let adj1 =
    "<span class='replacement'>" +
    document.getElementById("adj1").value +
    "</span>";
  let verbING =
    "<span class='replacement'>" +
    document.getElementById("verbIng").value +
    "</span>";
  let RealHousewivesLocation =
    "<span class='replacement'>" +
    document.getElementById("RealHousewivesLocation").value +
    "</span>";
  let color =
    "<span class='replacement'>" +
    document.getElementById("color").value +
    "</span>";
  let nounPlural =
    "<span class='replacement'>" +
    document.getElementById("nounPlural").value +
    "</span>";
  let pastVerb =
    "<span class='replacement'>" +
    document.getElementById("pastVerb").value +
    "</span>";
  let potion =
    "<span class='replacement'>" +
    document.getElementById("potion").value +
    "</span>";
  let zodiacSign =
    "<span class='replacement'>" +
    document.getElementById("zodiacSign").value +
    "</span>";
  let diffPlanet =
    "<span class='replacement'>" +
    document.getElementById("diffPlanet").value +
    "</span>";
  let cakeFlavour =
    "<span class='replacement'>" +
    document.getElementById("cakeFlavour").value +
    "</span>";
  let pastVerb2 =
    "<span class='replacement'>" +
    document.getElementById("pastVerb2").value +
    "</span>";
  let favSong =
    "<span class='replacement'>" +
    document.getElementById("favSong").value +
    "</span>";
  let hogwartsHouse =
    "<span class='replacement'>" +
    document.getElementById("hogwartsHouse").value +
    "</span>";
  let city =
    "<span class='replacement'>" +
    document.getElementById("city").value +
    "</span>";
  let verb =
    "<span class='replacement'>" +
    document.getElementById("verb").value +
    "</span>";
  /* Insert more variable definitions here */

  let theStory = "<h1>Douglas's Dance Party</h1> ";
  theStory += "One " + adj1 + " day, ";
  theStory += "Douglas was " + verbING;
  theStory += " in his " + RealHousewivesLocation;
  theStory +=
    ", reading a book about " + color + " " + nounPlural + ".<br></br>";
  theStory += " As he " + potion + " his " + zodiacSign + ", ";
  theStory += "he heard " + musicType + " music ";
  theStory += "playing in the " + diffPlanet + ".<br></br> ";
  theStory += cakeFlavour + "! he exclaimed, ";
  theStory += "as he " + pastVerb2 + " down the stairs to join the ";
  theStory += favSong + " party.<br></br>";
  theStory += "Douglas danced the " + hogwartsHouse + " Dance, ";
  theStory += "the " + city + " Twist, ";
  theStory += "and took the prize for dancing the best Electric " + verb + ".";

  /* Put the rest of the story here, using the += operator */
  storyDiv.innerHTML = theStory;
}
