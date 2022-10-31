export class Character {
    name: string
    health: number
    strength: number

    constructor(name: string, health: number, strength: number) {
        this.name = name
        this.health = health
        this.strength = strength
    }

    atack = (target: Character) => {
        target.health -= 10
    }

    info = () => {
        console.log(`
            Name - ${this.name}
            Health - ${this.health}
            Strength - ${this.strength}
        `)
    }
}