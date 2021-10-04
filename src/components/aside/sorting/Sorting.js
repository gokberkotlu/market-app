import { useDispatch } from "react-redux";
import { priceAscending, priceDescending, addedAscending, addedDescending } from "../../../store/actions/SortingActions";
import "../aside-common.css";
import "./sorting.css";

const Sorting = () => {

    const dispatch = useDispatch();

    return (
        <>
            <h4 className="filter-header">Sorting</h4>
            <ul className="filter-container sorting-container">
                <li className="checkbox-label-container">
                    <input type="radio" id="low-to-high" value="low-to-high" name="sorting"
                    onChange={() => dispatch(priceAscending())}
                    className="checkbox-style"/>
                    <label htmlFor="low-to-high">Price low to high</label>
                </li>
                <li className="checkbox-label-container">
                    <input type="radio" id="high-to-low" value="high-to-low" name="sorting"
                    onChange={() => dispatch(priceDescending())}
                    className="checkbox-style"/>
                    <label htmlFor="high-to-low">Price high to low</label>
                </li>
                <li className="checkbox-label-container">
                    <input type="radio" id="new-to-old" value="new-to-old" name="sorting"
                    onChange={() => dispatch(addedDescending())}
                    className="checkbox-style"/>
                    <label htmlFor="new-to-old">New to old</label>
                </li>
                <li className="checkbox-label-container">
                    <input type="radio" id="old-to-new" value="old-to-new" name="sorting"
                    onChange={() => dispatch(addedAscending())}
                    className="checkbox-style"/>
                    <label htmlFor="old-to-new">Old to new</label>
                </li>
            </ul>
        </>
    );
}
 
export default Sorting;