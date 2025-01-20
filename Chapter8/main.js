//First fucntion
var ourFirstFunction = function () {
  console.log("Hello world!");
};

ourFirstFunction();

//SayHelloTo function
function sayHelloTo(name) {
    console.log("Hello " + name + "!");
}

sayHelloTo("Nick");

//Draw cats 27 times!! functions
var drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
};

drawCats(5);

// Final function Fifth letter of my name
var fifthLetter = function (names) {
  if (names.length < 5) {
    return;
  }
  return `The fifth letter of your name is ${names[4]}.`;
};

fifthLetter("Phomello");
