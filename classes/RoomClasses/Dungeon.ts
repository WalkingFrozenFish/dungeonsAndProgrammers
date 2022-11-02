import { Room } from "./Room"

export class Dungeon {
    roomsArray: Room[] = []
    currentRoom: number

    constructor() {
        this.currentRoom = 0
    }

    createDungeon = (): void => {
        for (let i = 0; i < 5; i++) {
            const room = new Room(i)
            this.roomsArray.push(room)
        }
    }

    goToNextRoom = (): void => {
        if (this.currentRoom < this.roomsArray.length - 1) {
            this.currentRoom += 1
            console.log("Иду вперед")
        } else {
            this.currentRoom = this.roomsArray.length - 1
            console.log("Дальше ходу нет, поворачивай")
        }
    }

    goToPrevRoom = (): void => {
        if (this.currentRoom > 0) {
            this.currentRoom -= 1
            console.log("Иду назад")
        } else {
            this.currentRoom = 0
            console.log("Дальше ходу нет, поворачивай")
        }
    }

    showRoomsList = (): void => {
        console.log(`Список комнат\n`, this.roomsArray)
    }

    showCurrentRoom = (): Room => {
        console.log(`Мое местоположение\n`, this.roomsArray[this.currentRoom])
        return this.roomsArray[this.currentRoom]
    }
}

