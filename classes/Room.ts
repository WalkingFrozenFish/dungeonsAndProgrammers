import { InventoryItem } from "./Inventory";

export class Room {
    roomInventory: InventoryItem[] = []

    checkRoom = (): void => {
        console.log(this.roomInventory)
    }

    putItemToInventory = (item: InventoryItem) => {
        this.roomInventory.push(item)
    }

    getItemFromInventory = (item: InventoryItem): InventoryItem => {
        return item
    }


}