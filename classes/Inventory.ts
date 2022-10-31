export class Inventory {
    inventoryArray: InventoryItem[] = []

    getItem = (itemName: InventoryItem) => {
        this.inventoryArray.push(itemName)
    }

    dropItem = (itemName: string) => {
        const filteredArray = this.inventoryArray.filter(item => {
            if (itemName !== item.itemName) {
                return item
            }
        })

        this.inventoryArray = filteredArray
    }

    showInventory = () => {
        console.log(this.inventoryArray)
    }
}

export class InventoryItem {
    itemName: string

    constructor(itemName: string) {
        this.itemName = itemName
    }

    showInfo = () => {
        console.log(this.itemName)
    }
}

// const inventoryExample = new Inventory()
// const item1 = new InventoryItem("Item 1")
// const item2 = new InventoryItem("Item 2")
// const item3 = new InventoryItem("Item 3")

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