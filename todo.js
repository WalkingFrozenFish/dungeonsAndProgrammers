// Разнообразие противников. Объект с дополнительными свойствами который будет дополнять обычного противника.

const enemie1 = {
    name: "Эйчар",
    abilities: [],
}

const extra = {
    extraName: "Дерзкий",
    health: 50,
    mana: 50,
    abilities: [
        {
            abilitiesName: "Дерзкий ответ",
            effects: {
                positive: "",
                negative: ""
            }
        },
        {
            abilitiesName: "Наезд",
            effects: {
                positive: "",
                negative: ""
            }
        },
    ]
}