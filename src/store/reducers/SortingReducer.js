const SortingReducer = (state="", action) => {
    switch(action.type) {
        case "PRICE-ASC":
            return "&_sort=price&_order=asc&";
        case "PRICE-DESC":
            return "&_sort=price&_order=desc&";
        case "ADDED-ASC": // Old to New
            return "&_sort=added&_order=asc&";
        case "ADDED-DESC": // New to Old
            return "&_sort=added&_order=desc&";
        default:
            return state;
    }
}

export default SortingReducer;