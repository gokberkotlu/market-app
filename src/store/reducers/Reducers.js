import SortingReducer from "./SortingReducer";
import BrandsReducer from "./BrandsReducer";
import TagsReducer from "./TagsReducer";
import PaginationReducer from "./PaginationReducer";
import TotalPagesReducer from "./TotalPagesReducer";
import ItemTypeReducer from "./ItemTypeReducer";
import BasketReducer from "./BasketReducer";
import TotalPriceReducer from "./TotalPriceReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    sorting: SortingReducer,
    brands: BrandsReducer,
    tags: TagsReducer,
    pagination: PaginationReducer,
    totalPages: TotalPagesReducer,
    itemType: ItemTypeReducer,
    basket: BasketReducer,
    totalPrice: TotalPriceReducer
});

export default allReducers;