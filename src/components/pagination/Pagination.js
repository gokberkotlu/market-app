import { useDispatch, useSelector } from "react-redux";
import { previousPage, nextPage } from "../../store/actions/PaginationActions";
import arrowLeft from "../../assets/images/arrow-left.svg";
import arrowRight from "../../assets/images/arrow-right.svg";
import "./pagination.css";

const Pagination = () => {

    const pagination = useSelector(state => state.pagination);
    const totalPages = useSelector(state => state.totalPages);

    const dispatch = useDispatch();

    return (
        totalPages > 0 &&
        <div className="pagination-container">
            <button className="pagination-btn"
            disabled={pagination <= 1}
            onClick={() => dispatch(previousPage())}>
                <img src={arrowLeft} height={10} style={{marginRight: 12}} />
                <span>Prev</span>
            </button>
            <span>{ pagination } / {totalPages}</span>
            <button className="pagination-btn"
            disabled={!(pagination < totalPages)}
            onClick={() => {
                if(pagination < totalPages) {
                    dispatch(nextPage())
                }
            }}>
                <span style={{marginRight: 12}}>Next</span>
                <img src={arrowRight} height={10} />
            </button>
        </div>
    );
}
 
export default Pagination;