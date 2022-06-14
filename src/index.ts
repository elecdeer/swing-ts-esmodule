import chalk from "chalk"; //pure esm
import log4js from "log4js"; //commonjs

import hey from "./hey";
import {sayHey} from "./hey";

const logger = log4js.getLogger("main");

console.log("hello, world!");
console.log(chalk.red("Red!"))
console.log(await sayHey());
console.log(hey);
