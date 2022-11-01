// export interface ICharacter {
//     name: string
//     health: number
//     damage: number
//     canAtack: boolean
// }

export class Character {
    name: string
    health: number
    damage: number
    canAtack: boolean

    constructor(name: string, health: number, damage: number, canAtack: boolean) {
        this.name = name
        this.health = health
        this.damage = damage
        this.canAtack = canAtack
    }

    public atack = (target: Character) => {
        if (this.canAtack === false && this.health <= 0) {
            this.health = 0
            this.canAtack = false
            console.log(`${this.name} - не может атаковать`)
        }

        if (this.canAtack && target.health >= 0) {
            target.health -= this.damage

            if (target.health <= 0) {
                target.health = 0
                target.canAtack = false
                console.log(`${target.name} - уничтожен`)
            }
        }
    }

    characterInfo = () => {
        console.log(`Name - ${this.name}\nHealth - ${this.health}\ndamage - ${this.damage}
        `)
    }

    allInfo = (target: Character) => {
        console.log(`${this.name} - health(${this.health}), ${target.name} - health(${target.health})`)
    }
}