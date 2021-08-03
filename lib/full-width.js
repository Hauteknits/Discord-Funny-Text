//the following are suppose to be arrays, i'm just too lazy to make them arrays
const FULLWIDTH_ALPHA = "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ".split("") ;
const REGULAR_ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
const prompt = require('prompt-sync')();

var OUTPUT = "";

console.log("\n**********************************\n");
let response = prompt("Enter your text: ");

response = response.split("");
response.forEach((e) =>{
	if(e.toLowerCase().charCodeAt(0) >= 97 && e.toLowerCase().charCodeAt(0) <= 122){
		let ltr = FULLWIDTH_ALPHA[REGULAR_ALPHA.indexOf(e)];
		OUTPUT += ltr;
	}else{
		OUTPUT += " ";
		OUTPUT += e;
	}
});
console.log("Your output is below!: ")
console.log(OUTPUT);
require("../index.js");

