import { useDispatch, useSelector } from "react-redux";
import "./basket-app.css";
import { deleteItemFromBasket, decreaseBasketItemNumber, increaseBasketItemNumber } from "../../store/actions/BasketActions";

const BasketApp = () => {

    const basket = useSelector(state => state.basket);

    const dispatch = useDispatch();

    const bringBasketList = () => {
        let basketKeys = Object.keys(basket);
        let selectedItems = [];
        basketKeys.map((key) => {
            selectedItems.push([key, basket[key]]);
        })
        return selectedItems;
    }

    const calculatePrice = (items) => {
        let productPrice = 0;
        let availableItems = items["availableItems"];
        let productAdded = items["product-added"];
        for(let i = 0; i < availableItems.length; i++) {
            if(productAdded.includes(availableItems[i].added)) {
                productPrice += availableItems[i].price;
            }
        }
        return productPrice.toFixed(2);
    }

    return (
        <div>
            <ul>
                { bringBasketList().map((selectedItem) => (
                    <li
                    key={selectedItem[0]}
                    className="basket-selected-item"
                    >
                        <p>Name: { selectedItem[0] }</p>
                        <p>Price: { calculatePrice(selectedItem[1]) }</p>
                        <button onClick={() => dispatch(decreaseBasketItemNumber(selectedItem[0]))}>-</button>
                        <span>{ selectedItem[1]["numberOfProduct"] }</span>
                        <button onClick={() => dispatch(increaseBasketItemNumber(selectedItem[0]))}>+</button>
                        <button onClick={() => dispatch(deleteItemFromBasket(selectedItem[0]))}>Delete</button>
                    </li>
                )) }
            </ul>



        </div>
    );
}
 
export default BasketApp;