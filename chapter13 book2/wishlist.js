let printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

let addButton1 = document.getElementById("addIt1");
addButton1.addEventListener("click", addTheThing);

let addButton2 = document.getElementById("addIt2");
addButton2.addEventListener("click", addTheThing);


let myList = [];
let myListArea = document.getElementById("wishList");



function addTheThing(theThing1,theThing2) {

    let theThing1 = document.getElementById("iWant1");

    addToTheList(theThing1);
    resetInput(theThing1);

    let theThing2 = document.getElementById("iWant2");

    addToTheList(theThing2);
    resetInput(theThing2);

}

function addToTheList(thingToAdd) {
    myList.push(thingToAdd.value);
    let newListItem = document.createElement("li");
    newListItem.innerHTML = myList[myList.length - 1];

    myListArea.appendChild(newListItem);

}

function resetInput(inputToReset) {
    inputToReset.value = "";
}

function printView() {
    let listPage = document.getElementById("listPage");
    let formArea = document.getElementById("formArea");

    formArea.style.display = "none";
    listPage.className = "print";
    myListArea.innerHTML = "";
    myList.sort();

    for (let i = 0; i < myList.length; i++) {
        wishList.innerHTML += "<li>" + myList[i] + "</li>";
    }
    window.print();
}