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
            if(state.hasOwnProperty(action.namePayload) && state[action.namePayload]["product-added"].includes(action.addedPayload)) {
                let addedIndex = state[action.namePayload]["product-added"].indexOf(action.addedPayload);
                state[action.namePayload]["product-added"].splice(addedIndex, 1);
                state[action.namePayload]["numberOfProduct"] -= 1;
                if(state[action.namePayload]["numberOfProduct"] === 0) {
                    delete state[action.namePayload];
                }
                return {...state}
            }
            return state;
        default:
            return state;
    }
}

export default BasketReducer;