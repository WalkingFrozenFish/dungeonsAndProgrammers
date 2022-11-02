export class Room {
    roomId: number

    constructor(roomId: number) {
        this.roomId = roomId
    }

    showRoomInfo = (): void => {
        console.log(`This ${this.roomId} room`)
    }
}