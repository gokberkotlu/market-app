import SortingReducer from "./SortingReducer";
import BrandsReducer from "./BrandsReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    sorting: SortingReducer,
    brands: BrandsReducer
});

export default allReducers;