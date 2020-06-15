// const chalk = require("chalk");
import chalk from "chalk";
// import {test, VAR} from "./lib"; (1)
// import * as helper from "./lib"; (2)
//
// helper.test()
// helper.VAR;

// import {func1} from "./lib";
// func1();

import Functionality, {Test} from "./lib";
new Functionality().helper();

class Main {
    constructor() {
        this.main = "asd";
    }
}

class Child extends Main {
    constructor() {
        super();

        this.child = "child";

        console.log(chalk.red(this.child, chalk.blue(this.main)));
    }
}

new Child();