import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./basket-app.css";
import { deleteItemFromBasket, decreaseBasketItemNumber, increaseBasketItemNumber } from "../../store/actions/BasketActions";
import { setTotalPrice } from "../../store/actions/TotalPriceActions";
import minusSign from "../../assets/images/minus-sign.svg"
import plusSign from "../../assets/images/plus-sign.svg"
import timesSign from "../../assets/images/times-sign.svg"

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

    const calculatePrice = useCallback((items) => {
        let productPrice = 0;
        let availableItems = items["availableItems"];
        let productAdded = items["product-added"];
        for(let i = 0; i < availableItems.length; i++) {
            if(productAdded.includes(availableItems[i].added)) {
                productPrice += availableItems[i].price;
            }
        }
        return productPrice.toFixed(2);
    }, []);

    useEffect(() => {
        let basketKeys = Object.keys(basket);
        let totalPrice = 0;
        for(let i = 0; i < basketKeys.length; i++) {
            let availableItems = basket[basketKeys[i]]["availableItems"];
            let productAdded = basket[basketKeys[i]]["product-added"];
            for(let i = 0; i < availableItems.length; i++) {
                if(productAdded.includes(availableItems[i].added)) {
                    totalPrice += availableItems[i].price;
                }
            }
            dispatch(setTotalPrice(totalPrice));
        }
        if(basketKeys.length === 0) {
            dispatch(setTotalPrice(0));
        }
    }, [basket]);

    return (
        <div>
            {bringBasketList().length > 0 && <ul className="basket-container">
                { bringBasketList().map((selectedItem) => (
                    <li
                    key={ selectedItem[0] }
                    >
                        <span className="basket-selected-item">
                            <div>
                                <p className="basket-product-name">{ selectedItem[0] }</p>
                                <p className="basket-product-price">₺ { calculatePrice(selectedItem[1]) }</p>
                            </div>
                            <div className="basket-button-container">
                                <span onClick={() => dispatch(decreaseBasketItemNumber(selectedItem[0]))}>
                                    <img src={minusSign} className="basket-button" height={13} />
                                </span>
                                <span className="number-of-product">{ selectedItem[1]["numberOfProduct"] }</span>
                                <span onClick={() => dispatch(increaseBasketItemNumber(selectedItem[0]))}>
                                    <img src={plusSign} className="basket-button" height={13} />
                                </span>
                                <span
                                className="basket-delete-button"
                                onClick={() => dispatch(deleteItemFromBasket(selectedItem[0]))}>
                                    <img src={timesSign} height={10} />
                                </span>
                                
                            </div>
                        </span>
                        <div className="horizontal-line"></div>
                    </li>
                )) }
            </ul>}
        </div>
    );
}
 
export default React.memo(BasketApp);