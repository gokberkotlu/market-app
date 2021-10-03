import { useDispatch, useSelector } from "react-redux";
import { previousPage, nextPage } from "../../store/actions/PaginationActions";

const Pagination = () => {

    const pagination = useSelector(state => state.pagination);
    const totalPages = useSelector(state => state.totalPages);

    const dispatch = useDispatch();

    return (
        <div>
            <p>PAGINATION</p>
            <button
            disabled={pagination <= 1}
            onClick={() => dispatch(previousPage())}>-</button>
            <span>{ pagination }</span>
            <button
            disabled={!(pagination < totalPages)}
            onClick={() => {
                if(pagination < totalPages) {
                    dispatch(nextPage())
                }
            }}>+</button>
        </div>
    );
}
 
export default Pagination;