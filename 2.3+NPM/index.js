// var generateName = require("sillyname");

// import generateName from "sillyname";
import superheroes from "superheroes";

// var sillyname = generateName();
var name = superheroes[Math.floor(Math.random() * superheroes.length)];

// console.log(`my name is ${sillyname}.`);
console.log(`I am ${name}!`);

