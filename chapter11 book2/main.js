var parents = ["Precious", "Sello"];
var friends = ["Renate", "Sihle"];
var numbers = (4, 27, 98);
var familia = document.getElementById("myfamily");
var family = parents.concat(friends).valueOf();
let longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colours = [
  "blue",
  "red",
  "green",
  "yellow",
  "pink",
  "orange",
  "black",
  "purple",
  "white",
  "brown",
];

console.log(family);
console.log(colours.splice(1, 0, "Mello"));
console.log(colours.slice(1, 6));
familia.innerHTML = "<h1> This is my Family" + family + "</h1>";

/*var familyAndNumbers = family.concat(number);
console.log(familyAndNumbers);*/
