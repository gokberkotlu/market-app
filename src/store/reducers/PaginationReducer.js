const PaginationReducer = (state=1, action) => {
    switch(action.type) {
        case "NEXT-PAGE":
            return state + 1;
        case "PREVIOUS-PAGE":
            if(state > 1) {
                return state - 1;
            }
            return state;
        case "SELECTED-PAGE":
            return action.paylaod;
        default:
            return state;
    }
}

export default PaginationReducer;