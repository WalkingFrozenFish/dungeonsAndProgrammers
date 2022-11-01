class EnemyGenerator {

}

interface IExtra {
    extraName: string
    health: number
    mana: number
    abilities: IAbilities[]
}

interface IEnemy {
    name: string
}

interface IAbilities {
    abilitiesName: string
    effects: {
        positive(): void
        negative(): void
    }
}