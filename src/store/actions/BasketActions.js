export const addItemToBasket = (name, added, res=null) => {
    return {
        type: 'ADD-ITEM',
        namePayload: name,
        addedPayload: added,
        response: res
    }
}

export const deleteItemFromBasket = (name) => {
    return {
        type: 'DELETE-ITEM',
        namePayload: name
    }
}

export const increaseBasketItemNumber = (name) => {
    return {
        type: 'INCREASE-ITEM',
        namePayload: name
    }
}

export const decreaseBasketItemNumber = (name) => {
    return {
        type: 'DECREASE-ITEM',
        namePayload: name
    }
}