import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Items = () => {

    const [url, setUrl] = useState("http://localhost:8000/items?_page=1&_limit=16");
    const [items, setItems] = useState([]);
    const [pageNumber, setPageNumber] = useState(null);
    const limit = 16;

    const sorting = useSelector(state => state.sorting);
    const brands = useSelector(state => state.brands);

    useEffect(() => {
        let brandUrl = "";
        if(brands.length > 0)
            brandUrl = "manufacturer=" + brands.join("&manufacturer=");
        axios.get(url + '&' + sorting + brandUrl)
        .then(res => {
            setItems(res.data);
            setPageNumber(Math.ceil(res.headers["x-total-count"] / limit));
        })
    }, [sorting, brands]);


    return (
        <>
            <ul>
                { items.map(item => (
                    <li  key={item.added}>
                        <div>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                        <hr />
                    </li>
                )) }
            </ul>
            {pageNumber && <p>Pages: {pageNumber}</p>}
        </>
    );
}
 
export default Items;