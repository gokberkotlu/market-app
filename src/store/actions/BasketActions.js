export const addItemToBasket = (name, added) => {
    return {
        type: 'ADD-ITEM',
        namePayload: name,
        addedPayload: added
    }
}

export const deleteItemFromBasket = (added) => {
    return {
        type: 'DELETE-ITEM',
        addedPayload: added
    }
}