const ItemTypeReducer = (state="mug", action) => {
    switch(action.type) {
        case "SELECT-MUG":
            return "mug";
        case "SELECT-SHIRT":
            return "shirt";
        default:
            return state;
    }
}

export default ItemTypeReducer;