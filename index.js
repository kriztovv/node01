import {createRequire} from "module";
const require = createRequire(import.meta.url);

import chalk from 'chalk';
//const chalk = require("chalk");
//import fs from "fs";
const fs = require("fs");
fs.writeFileSync("soubor.txt", "Javascri");

const checkUtils = require("./utils.js");
//import checkUtils from "./utils.js"
checkUtils()

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

const process = require("process");
console.log(process.argv);

const argumenty = process.argv;
console.log(argumenty[2]);
if(argumenty[2]==="soucet"){
    console.log(argumenty[3]+argumenty[4])
}
