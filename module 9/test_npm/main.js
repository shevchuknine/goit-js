const {helpParseStrings} = require("./helpers/lib");
const chalk = require("chalk");

// console.log("main file");
console.log(chalk.blue("main file"));
console.log(chalk.red.bgYellow(helpParseStrings("123hello, world")));

