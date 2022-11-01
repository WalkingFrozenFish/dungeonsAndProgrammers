import { Character } from "./Character"

const figlet = require("figlet")
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

export class Application {
    static showMessage = () => {
        console.log("Application module - work")
    }

    mainCharacter: Character = new Character("Wizzard", 100, 10, true)
    enemy: Character = new Character("Warrior", 100, 10, true)

    main = (): void => {
        // this.mainCharacter = new Character("Wizzard", 100, 10, true)
        // this.enemy = new Character("Warrior", 100, 10, true)

        readline.question(`Выберите действие:\n1: Атаковать\n2: Инфо\n3: Показать инвентарь`, (userInput: string) => {
            if (userInput == "1") {
                console.clear()
                this.mainCharacter.atack(this.enemy)
                // this.main()
            } else if (userInput == "2") {
                console.clear()
                this.mainCharacter.allInfo(this.enemy)
                // this.main()
            } else if (userInput == "3") {
                console.clear()
                this.mainCharacter.inventory.showInventory()
                // this.main()
            }
            this.main()
        })
    }

    mainMenu = (): void => {
        figlet.text(`Dungeons & Programmers`, {
            font: "straight"
        }, (err: string, data: string) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)

                readline.question(`Выберите действие:\n1: Начать игру\n2: Завершить игру\n`, (userInput: string) => {
                    if (userInput == "1") {
                        console.log("Игра началась")
                        this.main()
                    } else if (userInput == "2") {
                        console.log("Игра завершена")
                        readline.close()
                        return
                    } else {
                        console.log("Введите корректное значение")
                    }

                    // return this.mainMenu()
                })

            }
        })
    }


}

const app = new Application()
app.mainMenu()