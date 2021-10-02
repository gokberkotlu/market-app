const TagsReducer = (state=[], action) => {
    switch(action.type) {
        case "ADD-TAG":
            return [...state, action.payload];
        case "DELETE-TAG":
            let index = state.indexOf(action.payload);
            state.splice(index, 1);
            return [...state];
        case "RESET-TAG":
            return [];
        default:
            return state;
    }
}

export default TagsReducer;