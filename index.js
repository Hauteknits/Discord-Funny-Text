const figlet = require('figlet');
const chalk = require('chalk');
const prompt = require('prompt-sync')();
const emoji = require('./lib/emoji.js');
const full = require('./lib/full-width.js');

const exitMessages = require("./lib/exitMessages.js");

console.log(chalk.cyan(figlet.textSync("Discord Funny Text", {
	horizontalLayout: 'controlled smushing',
})));
console.log(chalk.italic.yellow("Made with love by Hauteknits"));


do{
	console.log("\n\nPick your option from the choice below:\n"+
		`\t[${chalk.green(1)}]  Half-width to Full Width\n`+
		`\t[${chalk.green(2)}]  Text to Emoji Text\n`+
		`\t[${chalk.green(3)}]  Exit`);
	var choice = prompt("Choice:\t");
	choice= parseInt(choice);
	switch(choice){
		case 1:
			full.run();
			break;
		case 2:
			emoji.run();
			break;
		case 3:
			exit();
			break;
		default:
			console.error(chalk.bold.bgRed("unknown option, try again"));
			break;
	}
}while(choice != 3);

function exit(){
	exit(0);
}
function exit(code){
	console.log("\n" + chalk.bold.italic.green(exitMessages[Math.floor(Math.random()*exitMessages.length)]));
	console.log(chalk.bold("Press any key to exit"));
	process.stdin.setRawMode(true);
	process.stdin.resume();
	process.stdin.on('data',process.exit.bind(process, code));
}