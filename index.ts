import { Application } from "./classes/Application";
import { Character, ICharacter } from "./classes/Character";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// Application.showMessage()

const figlet = require("figlet")

// figlet.text("Dungeons & Programmers", {
//     font: "straight"
//     // font: "short"
// }, (err: string, data: string) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

const warrior = new Character("Warrior", 100, 15, true)
const wizzard = new Character("Wizzard", 100, 25, true)

const enemiesArray: ICharacter[] = [
    {
        name: "Thief",
        health: 80,
        damage: 10,
        canAtack: true
    },
    {
        name: "Paladin",
        health: 120,
        damage: 30,
        canAtack: true
    },
    {
        name: "Lion",
        health: 40,
        damage: 8,
        canAtack: true
    },
    {
        name: "Bat",
        health: 500,
        damage: 100,
        canAtack: true
    },
]

const app = () => {
    readline.question(`Выберите действие:\n\tАтаковать: 1\n\tИнфо: 2\n`, (userInput: string) => {
        // readline.close()
        if (userInput == "1") {
            warrior.atack(wizzard)
            warrior.allInfo(wizzard)
        } else if (userInput == "2") {
            wizzard.atack(warrior)
            wizzard.allInfo(warrior)
        } else if (userInput == "3") {
            let num = Math.floor(Math.random() * enemiesArray.length)
            console.log(enemiesArray[num])
        }

        return app()
    })
}

app()
