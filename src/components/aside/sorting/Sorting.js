import { useSelector, useDispatch } from "react-redux";
import { priceAscending, priceDescending, addedAscending, addedDescending } from "../../../store/actions/SortingActions";

const Sorting = () => {

    const sorting = useSelector(state => state.sorting);
    const dispatch = useDispatch();

    return (
        <>
            <h3>Sorting</h3>
            <ul>
                <li>
                    <input type="radio" id="low-to-high" value="low-to-high" name="sorting" onChange={() => console.log(dispatch(priceAscending()))} />
                    <label htmlFor="low-to-high">Price low to high</label>
                </li>
                <li>
                    <input type="radio" id="high-to-low" value="high-to-low" name="sorting" onChange={() => console.log(dispatch(priceDescending()))} />
                    <label htmlFor="high-to-low">Price high to low</label>
                </li>
                <li>
                    <input type="radio" id="new-to-old" value="new-to-old" name="sorting" onChange={() => console.log(dispatch(addedDescending()))} />
                    <label htmlFor="new-to-old">New to old</label>
                </li>
                <li>
                    <input type="radio" id="old-to-new" value="old-to-new" name="sorting" onChange={() => console.log(dispatch(addedAscending()))} />
                    <label htmlFor="old-to-new">Old to new</label>
                </li>
            </ul>
        </>
    );
}
 
export default Sorting;