import SortingReducer from "./SortingReducer";
import BrandsReducer from "./BrandsReducer";
import TagsReducer from "./TagsReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    sorting: SortingReducer,
    brands: BrandsReducer,
    tags: TagsReducer
});

export default allReducers;