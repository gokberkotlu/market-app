export const addItemToBasket = (name, added, res=null) => {
    return {
        type: 'ADD-ITEM',
        namePayload: name,
        addedPayload: added,
        response: res
    }
}

export const deleteItemFromBasket = (name, added) => {
    return {
        type: 'DELETE-ITEM',
        namePayload: name,
        addedPayload: added
    }
}