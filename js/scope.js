"use strict";
(function (){
var myNameIs = 'Yogesh';

function sayHello(name){
	console.log("hello " + name + "!")
}
sayHello(myNameIs)
var random = Math.floor((Math.random()*100)+1);
console.log("Random number is " + random.toString());


function isOdd(numbeToTest){

	(numbeToTest % 2 === 1 ) ? console.log("Number was odd.") : console.log("Number was even.")
}

isOdd(random);
})();
