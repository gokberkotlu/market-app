const TotalPriceReducer = (state=0, action) => {
    switch(action.type) {
        case "SET-TOTAL-PRICE":
            return action.payload;
        default:
            return state;
    }
}

export default TotalPriceReducer;