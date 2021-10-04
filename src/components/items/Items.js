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
import "./items.css";

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

    const checkItemAdding = (item) => {
        let itemQueryUrl = base_url + `?name=${item.name}`;
        if(!basket.hasOwnProperty(item.name)) {
            axios.get(itemQueryUrl)
            .then(res => {
                dispatch(addItemToBasket(item.name, item.added, res.data));
            })
        } else {
            dispatch(addItemToBasket(item.name, item.added));
        }
    }


    return (
        <div>
            <h2 className="products-header">PRODUCTS</h2>
            <ProductType />
            {items.length > 0 ? <ul className="product-container">
                { items.map(item => (
                    <li key={item.added} className="product">
                        <div className="product-image-container">
                            <div className="product-image"></div>
                        </div>
                        <div className="product-detail">
                            <p className="product-price">₺ {item.price}</p>
                            <p className="product-name">{item.name}</p>
                            <div className="add-button"
                            onClick={() => checkItemAdding(item)}>
                                Add
                            </div>
                        </div>
                    </li>
                )) }
            </ul> : <NoResults />}
            <Pagination />
        </div>
    );
}
 
export default React.memo(Items);