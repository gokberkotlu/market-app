import axios from "axios";
import { base_url } from "../../utils/base_url";

const BasketReducer = (state={}, action) => {
    switch(action.type) {
        case "ADD-ITEM":
            let itemQueryUrl = base_url + `?name=${action.namePayload}`;
            if(!state.hasOwnProperty(action.namePayload)) {
                let productAdded = [];
                let itemNumber = 0;
                let availableItemNumber = 0;
                axios.get(itemQueryUrl)
                .then(res => {
                    productAdded.push(action.addedPayload);
                    itemNumber += 1;
                    availableItemNumber = res.data.length;
                    availableItemNumber = res.data.length;
                    state[action.namePayload] = {
                        "product-added": productAdded,
                        "numberOfProduct": itemNumber,
                        "availableNumber": availableItemNumber
                    };
                    console.log(state);
                    return state;
                })
            } else {
                if(state[action.namePayload]["numberOfProduct"] < state[action.namePayload]["availableNumber"]
                &&
                !state[action.namePayload]["product-added"].includes(action.addedPayload)) {
                    // if not adding same item or complete the max number of same named items
                    state[action.namePayload]["product-added"].push(action.addedPayload);
                    state[action.namePayload]["numberOfProduct"] += 1;
                    return state;
                } else {
                    return state;
                }
            }
        case "DELETE-ITEM":
            return state;
        default:
            return state;
    }
}

export default BasketReducer;