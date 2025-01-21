var item1;
var item2;
var item3;

document.getElementById("greeting").innerHTML = "Hey Gals and Pals!";
document.getElementById("changeList").onclick = newList;

function newList() {
  item1 = prompt("Enter your number one: ");
  item2 = prompt("Enter your number two: ");
  item3 = prompt("Enter your number three: ");
  updateList();
}
function updateList() {
  document.getElementById("firstThing").innerHTML=item1;
  document.getElementById("secondThing").innerHTML=item2;
  document.getElementById("thirdThing").innerHTML=item3;
}
