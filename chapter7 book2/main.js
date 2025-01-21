/*document.getElementById("lefteye").style.backgroundColor = "purple";

document.getElementById("head").style.transform = "rotate(195deg)";

// Put a 2‐pixel‐wide, solid black border around his body.
document.getElementById("body").style.border = "2px blacksolid";

// Round the corners of his mouth.
document.getElementById("mouth").style.border = "5px purple solid";

// Put a 2‐pixel‐wide, solid black border around his body.
document.getElementById("body").style.border = "2px blacksolid";

// Round the corners of his mouth.
document.getElementById("mouth").style.borderRadius = "6px";

document.getElementById("rightarm").style.backgroundColor = "green";*/


var rightEye = document.getElementById("righteye");
var leftArm = document.getElementById("leftarm");

rightEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);


function moveUpDown(e) { 
var robotPart = e.target;
var top = 0;
var id = setInterval(frame, 10) // draw every 10ms

function frame() {
    robotPart.style.top = top + "%";
    top++;
    if (top === 20){
    clearInterval(id);
    }
    }
}

function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
    robotPart.style.left = left + '%';
    left++;
    if (left === 70){
    clearInterval(id);
    }
    }
    }