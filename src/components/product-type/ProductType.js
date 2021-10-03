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
            <div className="switch-filtercontainer">
                <div className={typeActive ? "type-active mug-shirt" : "mug-shirt"}
                onClick={() => {
                    dispatch(selectMug());
                    setTypeActive(true);
                }}>
                    mug
                </div>
                <div className={!typeActive ? "type-active mug-shirt" : "mug-shirt"}
                onClick={() => {
                    dispatch(selectShirt());
                    setTypeActive(false);
                }}>
                    shirt
                </div>
            </div>
        </div>
    );
}
 
export default ProductType;