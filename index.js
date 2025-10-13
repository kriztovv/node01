import chalk from "chalk";
import fs from "fs";
import checkUtils from "./utils.js";

checkUtils();

// Získání argumentů (první 2 jsou node a cesta k souboru)
const args = process.argv.slice(2);
const prikaz = args[0];
const text = args[1];

console.log(`Zadal jsi prikaz: ${prikaz}`);

if (prikaz === "write") {
  if (!text) {
    console.log(
      chalk.red("Chybi text! Pouziti: node script.js write 'tvuj text'")
    );
  } else {
    console.log(chalk.blue("Zapisuji do souboru..."));
    fs.writeFileSync("soubor.txt", text);
    console.log(chalk.green("Text ulozen do souboru!"));
  }
} else if (prikaz === "read") {
  try {
    const obsah = fs.readFileSync("soubor.txt", "utf8");
    console.log(chalk.blue("Obsah souboru:"));
    console.log(obsah);
  } catch (err) {
    console.log(chalk.red("Soubor neexistuje!"));
  }
} else {
  console.log(chalk.red("Neznamy prikaz!"));
  console.log("Pouziti:");
  console.log("  node script.js write 'tvuj text'");
  console.log("  node script.js read");
}
