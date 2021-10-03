import { useSelector } from "react-redux";

const BasketApp = () => {

    const basket = useSelector(state => state.basket);

    const basketKeys = Object.keys(basket);
    // const basketLength = Object.keys(basket).length;

    return (
        <div>
            {/* <p>BASKET APP</p>
            { basketKeys.map(key => {
                <>
                    { basket[key]["product-added"].map((addedItem) => {
                        <>
                            <p>Name: { key }</p>
                            <p>Added: { addedItem }</p>
                        </>
                    }) }
                </>
            }) } */}
        </div>
    );
}
 
export default BasketApp;