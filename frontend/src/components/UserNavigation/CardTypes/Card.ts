export enum CardType {
    'ACTION',
    'CHAMPION',
    'REGALIA',
    'ALLY',
    'ATTACK',
}

// export enum ElementName {
//     'FIRE',
//     'WATER',
//     'WIND',
//     'LIGHT',
//     'CRUX',
//     'NORM',
// }

export interface Card {
    type:CardType,
    element:string,
    class:string[],
    subType:string[],
    effect:string,
    effect_raw:string,
}

export type ExtraDeckCard= Card & {
    cost_memory:number,

}

export type MainDeckCard = Card & {
    cost_reserve:number,
}

export type ChampionCard = ExtraDeckCard & {
    level:number
    life:number
}

