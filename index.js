const figlet = require('figlet');
const chalk = require('chalk');
const prompt = require('prompt-sync')();
//const fs = require('fs');

const exitMessages = require("./lib/exitMessages.js");

console.log(chalk.cyan(figlet.textSync("Discord Funny Text", {
	horizontalLayout: 'controlled smushing',
})));
console.log(chalk.italic.yellow("Made by Hauteknits"));
console.log("\n\nPick your option from the choice below:\n"+
	"\t[1]  Half-width to Full Width\n"+
	"\t[2]  Text to Emoji Text\n"+
	"\t[3]  Exit");
let choice = prompt("Choice:\t");
choice= parseInt(choice);
switch(choice){
	case 1:
		require("./lib/full-width.js");
		break;
	case 2:
		require("./lib/emoji.js");
		break;
	case 3:
		exit();
		break;
	default:
		console.error(chalk.bold.bgRed("unknown option"));
		exit(1);
		break;
}

function exit(){
	exit(0);
}
function exit(code){
	console.log("\n" + chalk.bold.italic.green(exitMessages[Math.floor(Math.random()*exitMessages.length)]));
	console.log(chalk.red("Exiting"));
	process.exit(code);
}

module.exports = exit();