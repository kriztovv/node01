import chalk from "chalk";
import fs from "fs";
import checkUtils from "./utils.js";

checkUtils();

// Získání argumentů (první 2 jsou node a cesta k souboru)
const args = process.argv.slice(2);
const prikaz = args[0];
const text = args[1];

console.log(`Zadal jsi prikaz: ${prikaz}`);

const showHelp = () => {
  console.log(chalk.yellow("Dostupné příkazy:"));
  console.log("  write <text> - zapíše text do souboru");
  console.log("  read - přečte obsah souboru");
  console.log("  append <text> - přidá text na konec souboru");
  console.log("  delete - smaže soubor");
  console.log("  info - zobrazí informace o souboru");
  console.log("  count - spočítá znaky v souboru");
  console.log("  upper - převede obsah souboru na velká písmena");
  console.log("  lower - převede obsah souboru na malá písmena");
  console.log("  clear - vyprázdní soubor");
  console.log("  help - zobrazí nápovědu");
};

switch (prikaz) {
  case "write":
    if (!text) {
      console.log(chalk.red("Chybí text! Použití: node script.js write 'tvůj text'"));
    } else {
      console.log(chalk.blue("Zapisuji do souboru..."));
      fs.writeFileSync("soubor.txt", text);
      console.log(chalk.green("Text uložen do souboru!"));
    }
    break;

  case "read":
    try {
      const obsah = fs.readFileSync("soubor.txt", "utf8");
      console.log(chalk.blue("Obsah souboru:"));
      console.log(obsah);
    } catch (err) {
      console.log(chalk.red("Soubor neexistuje!"));
    }
    break;

  case "append":
    if (!text) {
      console.log(chalk.red("Chybí text! Použití: node script.js append 'tvůj text'"));
    } else {
      try {
        let existingContent;
if (fs.existsSync("soubor.txt")) {
    existingContent = fs.readFileSync("soubor.txt", "utf8");
} else {
    existingContent = "";
}
        fs.writeFileSync("soubor.txt", existingContent + "\n" + text);
        console.log(chalk.green("Text přidán do souboru!"));
      } catch (err) {
        console.log(chalk.red("Chyba při přidávání textu!"));
      }
    }
    break;

  case "delete":
    try {
      if (fs.existsSync("soubor.txt")) {
        fs.unlinkSync("soubor.txt");
        console.log(chalk.green("Soubor byl smazán!"));
      } else {
        console.log(chalk.yellow("Soubor neexistuje!"));
      }
    } catch (err) {
      console.log(chalk.red("Chyba při mazání souboru!"));
    }
    break;

  case "info":
    try {
      if (fs.existsSync("soubor.txt")) {
        const stats = fs.statSync("soubor.txt");
        console.log(chalk.blue("Informace o souboru:"));
        console.log(`Velikost: ${stats.size} bajtů`);
        console.log(`Vytvořeno: ${stats.birthtime}`);
        console.log(`Poslední úprava: ${stats.mtime}`);
      } else {
        console.log(chalk.yellow("Soubor neexistuje!"));
      }
    } catch (err) {
      console.log(chalk.red("Chyba při získávání informací!"));
    }
    break;

  case "count":
    try {
      if (fs.existsSync("soubor.txt")) {
        const obsah = fs.readFileSync("soubor.txt", "utf8");
        console.log(chalk.blue(`Počet znaků v souboru: ${obsah.length}`));
      } else {
        console.log(chalk.yellow("Soubor neexistuje!"));
      }
    } catch (err) {
      console.log(chalk.red("Chyba při počítání znaků!"));
    }
    break;

  case "upper":
    try {
      if (fs.existsSync("soubor.txt")) {
        const obsah = fs.readFileSync("soubor.txt", "utf8");
        fs.writeFileSync("soubor.txt", obsah.toUpperCase());
        console.log(chalk.green("Text převeden na velká písmena!"));
      } else {
        console.log(chalk.yellow("Soubor neexistuje!"));
      }
    } catch (err) {
      console.log(chalk.red("Chyba při převodu textu!"));
    }
    break;

  case "lower":
    try {
      if (fs.existsSync("soubor.txt")) {
        const obsah = fs.readFileSync("soubor.txt", "utf8");
        fs.writeFileSync("soubor.txt", obsah.toLowerCase());
        console.log(chalk.green("Text převeden na malá písmena!"));
      } else {
        console.log(chalk.yellow("Soubor neexistuje!"));
      }
    } catch (err) {
      console.log(chalk.red("Chyba při převodu textu!"));
    }
    break;

  case "clear":
    try {
      fs.writeFileSync("soubor.txt", "");
      console.log(chalk.green("Soubor byl vyprázdněn!"));
    } catch (err) {
      console.log(chalk.red("Chyba při vyprazdňování souboru!"));
    }
    break;

  case "help":
    showHelp();
    break;

  default:
    console.log(chalk.red("Neznámý příkaz!"));
    showHelp();
}
