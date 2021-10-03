import SortingReducer from "./SortingReducer";
import BrandsReducer from "./BrandsReducer";
import TagsReducer from "./TagsReducer";
import PaginationReducer from "./PaginationReducer";
import TotalPagesReducer from "./TotalPagesReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    sorting: SortingReducer,
    brands: BrandsReducer,
    tags: TagsReducer,
    pagination: PaginationReducer,
    totalPages: TotalPagesReducer
});

export default allReducers;