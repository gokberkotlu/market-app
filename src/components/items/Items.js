import React, { useState, useEffect, useCallback } from "react";
import Pagination from "../pagination/Pagination";
import ProductType from "../product-type/ProductType";
import NoResults from "../no-results/NoResults";
import BasketApp from "../basket-app/BasketApp";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setTotalPages } from "../../store/actions/TotalPagesAction";
import { addItemToBasket } from "../../store/actions/BasketActions";
import { resetPage } from "../../store/actions/PaginationActions";
import { base_url } from "../../utils/base_url";

const Items = () => {

    const [items, setItems] = useState([]);
    const limit = 16;

    const sorting = useSelector(state => state.sorting);
    const brands = useSelector(state => state.brands);
    const tags = useSelector(state => state.tags);
    const pagination = useSelector(state => state.pagination);
    const totalPages = useSelector(state => state.totalPages);
    const itemType = useSelector(state => state.itemType);
    const basket = useSelector(state => state.basket);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetPage());
    }, [sorting, brands, tags, itemType])

    useEffect(() => {
        let main_url = base_url + `?_page=${pagination}&_limit=16&`;
        let brandQuery = "";
        let tagQuery = "";
        let itemTypeQuery = `&itemType=${itemType}`;
        if(brands.length > 0) {
            brandQuery = "manufacturer=" + brands.join("&manufacturer=");
        }
        tagQuery = "&tags_like=" +  tags.join("&tags_like=");
        axios.get(main_url + sorting + brandQuery + tagQuery + itemTypeQuery)
        .then(res => {
            setItems(res.data);
            dispatch(setTotalPages(Math.ceil(res.headers["x-total-count"] / limit)));
        })
    }, [sorting, brands, tags, pagination, itemType]);

    // useEffect(() => {
    //     console.log(basket);
    // }, [basket]);

    const checkItemAdding = useCallback((item) => {
        let itemQueryUrl = base_url + `?name=${item.name}`;
        if(!basket.hasOwnProperty(item.name)) {
            axios.get(itemQueryUrl)
            .then(res => {
                dispatch(addItemToBasket(item.name, item.added, res.data));
            })
        } else {
            dispatch(addItemToBasket(item.name, item.added));
        }
    }, [])


    return (
        <div style={{ position: "absolute", top: 70, right: 500 }}>
            <BasketApp />
            <ProductType />
            {items.length > 0 ? <ul>
                { items.map(item => (
                    <li key={item.added}>
                        <div>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <button onClick={() => checkItemAdding(item)}>Add</button>
                        </div>
                        <hr />
                    </li>
                )) }
            </ul> : <NoResults />}
            {totalPages > 0 && <p>Pages: {totalPages}</p>}
            <Pagination />
        </div>
    );
}
 
export default React.memo(Items);