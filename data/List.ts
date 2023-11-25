export interface shopInterface {
    shop: string,
    items: itemInterface[]
}

export interface itemInterface {
    name: string,
    quantity: number
}

export const shoppingList: shopInterface[] = [
    {
        shop: "Bhatbhateni",
        items: [
            {
                name: "Milk",
                quantity: 2
            },
            {
                name: "Bread",
                quantity: 1
            }
        ]
    },
    {
        shop: "Big Mart",
        items: [
            {
                name: "Cups",
                quantity: 2
            },
            {
                name: "Daal",
                quantity: 1
            }
        ]
    },
    {
        shop: "Salesberry",
        items: [
            {
                name: "Beer",
                quantity: 2
            },
            {
                name: "Cheese",
                quantity: 1
            }
        ]
    }
]