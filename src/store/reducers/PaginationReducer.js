const BrandsReducer = (state=[], action) => {
    switch(action.type) {
        case "NEXT-PAGE":
            return state + 1;
        case "PREVIOUS-PAGE":
            return state - 1;
        case "SELECTED-PAGE":
            return action.paylaod;
        default:
            return state;
    }
}

export default BrandsReducer;