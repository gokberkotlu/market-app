const BasketReducer = (state={}, action) => {
    switch(action.type) {
        case "ADD-ITEM":
            if(action.response) {
                let productAdded = [];
                let itemNumber = 0;
                productAdded.push(action.addedPayload);
                itemNumber += 1;
                state[action.namePayload] = {
                    "product-added": productAdded,
                    "numberOfProduct": itemNumber,
                    "availableItems": action.response,
                };
                return { ...state };
            } else {
                if(state[action.namePayload]["numberOfProduct"] < state[action.namePayload]["availableItems"].length
                &&
                !state[action.namePayload]["product-added"].includes(action.addedPayload)) {
                    // if not adding same item or complete the max number of same named items
                    state[action.namePayload]["product-added"].push(action.addedPayload);
                    state[action.namePayload]["numberOfProduct"] += 1;
                    return { ...state };
                } else {
                    return state;
                }
            }

        case "DELETE-ITEM":
            delete state[action.namePayload];
            return {...state};

        case "INCREASE-ITEM":
            let itemType = action.namePayload;
            let increaseItemGroup = state[itemType];
            let availableItemsAddedInfo = [];
            increaseItemGroup["availableItems"].forEach((availableItem) => {
                availableItemsAddedInfo.push(availableItem.added);
            });
            var difference = availableItemsAddedInfo.filter(x => increaseItemGroup["product-added"].indexOf(x) === -1);
            if(difference.length > 0) {
                increaseItemGroup["product-added"].push(difference[0]);
                increaseItemGroup["numberOfProduct"] += 1;
            }

            return {...state};
            
        case "DECREASE-ITEM":
            let decreaseItemGroup = state[action.namePayload];
            if(decreaseItemGroup["product-added"].length > 1) {
                decreaseItemGroup["product-added"].pop();
                decreaseItemGroup["numberOfProduct"] -= 1;
            }
            return {...state};
        default:
            return state;
    }
}

export default BasketReducer;