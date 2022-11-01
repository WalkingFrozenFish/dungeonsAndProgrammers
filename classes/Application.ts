const figlet = require("figlet")
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

export class Application {
    static showMessage = () => {
        console.log("Application module - work")
    }

    main = (): void => {
        console.log("main func")
        readline.close()
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