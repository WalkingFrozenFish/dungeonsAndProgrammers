import { InventoryItem } from "./Inventory";

export class Room {
    roomInventory: InventoryItem[] = []
    roomId: number

    constructor(roomId: number) {
        this.roomId = roomId
    }

    checkRoom = (): void => {
        console.log(this.roomInventory)
    }

    putToRoom = (item: InventoryItem) => {
        this.roomInventory.push(item)
    }

    getFromRoom = (item: InventoryItem): InventoryItem => {
        return item
    }
}


class Rooms {
    roomsArray: Room[] = []
    currentRoom!: Room | null

    constructor() {

    }

    changeRoom = (): void => {

    }

    showRooms = (): void => {

    }
}


interface IEvent {
    action(): void
}

class EventEnemy implements IEvent {
    action = (): void => {
        console.log("Enemy strategy")
    }
}

class EventShop implements IEvent {
    action = (): void => {
        console.log("Shop strategy")
    }
}

class EventChest implements IEvent {
    action = (): void => {
        console.log("Event chest")
    }
}

class RoomEvent {
    roomEvent: IEvent | undefined

    setRoomEvent = (ev: IEvent): void => {
        this.roomEvent = ev
    }

    action = (): void => {
        this.roomEvent!.action()
    }
}

const room = new RoomEvent()
room.setRoomEvent(new EventChest())
room.action()
room.setRoomEvent(new EventEnemy())
room.action()
room.setRoomEvent(new EventShop())
room.action()