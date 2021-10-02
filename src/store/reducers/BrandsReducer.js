const BrandsReducer = (state=[], action) => {
    switch(action.type) {
        case "ADD-BRAND":
            return [...state, action.payload];
        case "DELETE-BRAND":
            let index = state.indexOf(action.payload);
            state.splice(index, 1);
            return [...state];
        case "RESET-BRAND":
            return [];
        default:
            return state;
    }
}

export default BrandsReducer;