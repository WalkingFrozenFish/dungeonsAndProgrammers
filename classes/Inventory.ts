export class Inventory {
    inventoryArray: InventoryItem[] = []
    inventorySize: number = 10
    inventoryAvailableSize = 10

    getItem = (itemName: InventoryItem) => {
        const formula = (this.inventoryAvailableSize - itemName.inventoryCell) >= 0

        if (formula) {
            this.inventoryArray.push(itemName)
            this.inventoryAvailableSize -= itemName.inventoryCell
        } else {
            console.log("Нет места в инвентаре")
        }
    }

    dropItem = (itemName: InventoryItem) => {
        const filteredArray = this.inventoryArray.filter(item => {
            if (itemName.itemName !== item.itemName) {
                return item
            } else {
                this.inventoryAvailableSize += itemName.inventoryCell
            }
        })

        this.inventoryArray = filteredArray
    }

    showInventory = () => {
        console.log(`Вместимость инвентара - ${this.inventorySize}, свободно - ${this.inventoryAvailableSize}`)
        console.log(this.inventoryArray)
    }
}

// interface IInventoryItem {
//     itemName: string

//     // effects?: {
//     //     positive?: string
//     //     negative?: string
//     // }

//     damage?: number
//     heal?: number

//     inventoryCell: number
// }

export class InventoryItem {
    itemName: string
    inventoryCell: number

    constructor(itemName: string, inventoryCell: number) {
        this.itemName = itemName
        this.inventoryCell = inventoryCell
    }

    showInfo = () => {
        console.log(`Предмет - ${this.itemName}, занимает единиц инвентаря - ${this.inventoryCell}`)
    }
}

const inventoryExample = new Inventory()
const item1 = new InventoryItem("Item 1", 1)
const item2 = new InventoryItem("Item 2", 2)
const item4 = new InventoryItem("Item 2", 5)
const item3 = new InventoryItem("Item 3", 3)

item1.showInfo()
item2.showInfo()
item3.showInfo()

inventoryExample.getItem(item1)
inventoryExample.getItem(item2)
inventoryExample.getItem(item3)
inventoryExample.getItem(item4)

inventoryExample.showInventory()

inventoryExample.dropItem(item1)
inventoryExample.showInventory()
inventoryExample.getItem(item4)
inventoryExample.showInventory()
inventoryExample.getItem(item1)
inventoryExample.showInventory()

// inventoryExample.getItem(item1)
// inventoryExample.getItem(item2)
// inventoryExample.getItem(item3)

// inventoryExample.showInventory()

// // inventoryExample.inventoryArray[2].showInfo()
// inventoryExample.dropItem("Item 2")
// inventoryExample.showInventory()
// inventoryExample.getItem(item2)
// inventoryExample.getItem(item2)
// inventoryExample.showInventory()