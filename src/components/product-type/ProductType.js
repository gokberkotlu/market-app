import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectMug, selectShirt } from "../../store/actions/ItemTypeActions";
import "./product-type.css";

const ProductType = () => {

    const [typeActive, setTypeActive] = useState(true);

    const dispatch = useDispatch();

    return (
        <div>
            <h2>PRODUCTS</h2>
            <button
            className={typeActive ? "type-active" : ""}
            onClick={() => {
                dispatch(selectMug());
                setTypeActive(true);
            }}>
                mug
            </button>
            <button
            className={!typeActive ? "type-active" : ""}
            onClick={() => {
                dispatch(selectShirt());
                setTypeActive(false);
            }}>
                shirt
            </button>
        </div>
    );
}
 
export default ProductType;