import { Application } from "./classes/Application";
import { Character } from "./classes/Character";

Application.showMessage()

const warrior = new Character("Warrior", 100, 100)
const wizzard = new Character("Wizzard", 100, 100)

warrior.atack(wizzard)
wizzard.atack(warrior)

warrior.info()
wizzard.info()