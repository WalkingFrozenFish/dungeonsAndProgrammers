import { Dungeon } from "./Dungeon";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const dungeon = new Dungeon()
dungeon.createDungeon()

const main = () => {
    readline.question(`Выберите действие:\n\t1: Следующая комната\n\t2: Предыдущая комната\n\t3: Показать список комнат\n\t4: Показать текущую комнату\n\nВаш выбор: `, (userInput: string) => {
        switch (userInput) {
            case "1":
                console.clear()
                main()
                dungeon.goToNextRoom()
                break;
            case "2":
                console.clear()
                main()
                dungeon.goToPrevRoom()
                break;
            case "3":
                console.clear()
                main()
                dungeon.showRoomsList()
                break;
            case "4":
                console.clear()
                main()
                dungeon.showCurrentRoom()
                break;
            default:
                console.log("Завершаю игру")
                readline.close()
                break;
        }
    })
}

main()