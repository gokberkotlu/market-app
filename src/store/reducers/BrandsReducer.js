const BrandsReducer = (state=[], action) => {
    switch(action.type) {
        case "ADD-BRAND":
            return [...state, action.payload];
        case "ADD-BRAND":
            let index = state.indexOf(action.payload)
            return state.splice(index, 1);
        default:
            return state;
    }
}

export default BrandsReducer;