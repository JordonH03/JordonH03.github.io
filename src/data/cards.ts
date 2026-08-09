interface ICard {
    imageUrl: string
    name: string
    rarity: 'super rare' | 'secret'
}

export const SECRET_CARD: ICard = {
    imageUrl: '',
    name: 'secret',
    rarity: 'secret',
}

export const CARDS: ICard[] = [
    {
        imageUrl: '/assets/cards/rbc_unit_fest.JPG',
        name: 'rbc',
        rarity: 'super rare',
    },
    {
        imageUrl: '',
        name: 'sad',
        rarity: 'super rare',
    },
    {
        imageUrl: '',
        name: 'happy',
        rarity: 'super rare',
    },
    {
        imageUrl: '',
        name: 'mad',
        rarity: 'super rare',
    },
    {
        imageUrl: '',
        name: 'silly',
        rarity: 'super rare',
    },
    {
        imageUrl: '',
        name: 'sleepy',
        rarity: 'super rare',
    },
]