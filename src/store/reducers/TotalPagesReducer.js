const TotalPagesReducer = (state=0, action) => {
    switch(action.type) {
        case "SET-TOTAL-PAGES":
            return action.payload;
        default:
            return state;
    }
}

export default TotalPagesReducer;