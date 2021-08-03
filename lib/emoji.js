const PREFIX = ":regional_indicator_" ;
const SUFFIX = ":";
const WORD_SPACING = "  ";
const prompt = require('prompt-sync')();

var OUTPUT = "";

console.log("\n**********************************\n");
let response = prompt("Enter your text: ");
response = response.split("");
response.forEach((e) =>{
	if(e.toLowerCase().charCodeAt(0) >= 97 && e.toLowerCase().charCodeAt(0) <= 122){
		if(e.toLowerCase().charCodeAt(0) != 98){
			let ltr = PREFIX;
			ltr += e.toLowerCase();
			ltr += SUFFIX;
			OUTPUT += ltr;
			OUTPUT += " ";
		}else{
			OUTPUT += ":b: ";
		}
	}else{
		OUTPUT += e;
		OUTPUT += " ";
	}
	OUTPUT += WORD_SPACING;
});

console.log("Your output is below!: ")
console.log(OUTPUT);
require("../index.js");
