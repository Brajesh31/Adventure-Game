import chalk from "chalk";
import inquirer from "inquirer";
class player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fueldecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fueldecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
let Player = await inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Please Enter Your Name:"
    }]);
let Opponent = await inquirer.prompt([{
        name: "Select",
        type: "list",
        message: "Please Select Your opponent:",
        choices: ["Zombie", "Monsters", "Skeleton"]
    }]);
let p1 = new player(Player.name);
let o1 = new opponent(Opponent.Select);
do {
    if (Opponent.Select == "Skeleton") {
        let ask = await inquirer.prompt([{
                type: "list",
                name: "Option",
                message: "Please Select Your option:",
                choices: ["Attack", "Dirnk portion", "Run To Your Life... "]
            }]);
        if (ask.Option == "Attack") {
            console.log('attack');
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(`${chalk.bold.red(p1.name)} fuel is ${p1.fuel}`);
                console.log(`${chalk.bold.green(o1.name)} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("you win"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log(`${chalk.bold.red(o1.name)} fuel is ${o1.fuel}`);
                console.log(`${chalk.bold.green(p1.name)} fuel is ${p1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("you loose, better luck next time"));
                    process.exit();
                }
            }
        }
        if (ask.Option == "Dirnk portion") {
            p1.fuelIncrease;
            console.log(chalk.bold.green.italic(`you drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.Option == "Run To Your Life... ") {
            console.log(chalk.bold.red.italic("you loose, better luck next time"));
            process.exit();
        }
    }
    // monsters
    if (Opponent.Select == "Monsters") {
        let ask = await inquirer.prompt([{
                type: "list",
                name: "Option",
                message: "Please Select Your option:",
                choices: ["Attack", "Dirnk portion", "Run To Your Life... "]
            }]);
        if (ask.Option == "Attack") {
            console.log('attack');
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(`${chalk.bold.red(p1.name)} fuel is ${p1.fuel}`);
                console.log(`${chalk.bold.green(o1.name)} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("you win"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log(`${chalk.bold.red(o1.name)} fuel is ${o1.fuel}`);
                console.log(`${chalk.bold.green(p1.name)} fuel is ${p1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("you loose, better luck next time"));
                    process.exit();
                }
            }
        }
        if (ask.Option == "Dirnk portion") {
            p1.fuelIncrease;
            console.log(chalk.bold.green.italic(`you drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.Option == "Run To Your Life... ") {
            console.log(chalk.bold.red.italic("you loose, better luck next time"));
            process.exit();
        }
    }
    // zombie
    if (Opponent.Select == "Zombie") {
        let ask = await inquirer.prompt([{
                type: "list",
                name: "Option",
                message: "Please Select Your option:",
                choices: ["Attack", "Dirnk portion", "Run To Your Life... "]
            }]);
        if (ask.Option == "Attack") {
            console.log('attack');
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(`${chalk.bold.red(p1.name)} fuel is ${p1.fuel}`);
                console.log(`${chalk.bold.green(o1.name)} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("you win"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log(`${chalk.bold.red(o1.name)} fuel is ${o1.fuel}`);
                console.log(`${chalk.bold.green(p1.name)} fuel is ${p1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("you loose, better luck next time"));
                    process.exit();
                }
            }
        }
        if (ask.Option == "Dirnk portion") {
            p1.fuelIncrease;
            console.log(chalk.bold.green.italic(`you drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.Option == "Run To Your Life... ") {
            console.log(chalk.bold.red.italic("you loose, better luck next time"));
            process.exit();
        }
    }
} while (true);
