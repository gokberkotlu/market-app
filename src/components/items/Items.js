import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { base_url } from "../../utils/base_url";

const Items = () => {

    const [items, setItems] = useState([]);
    const [pageNumber, setPageNumber] = useState(null);
    const url = base_url + "?_page=1&_limit=16";
    const limit = 16;

    const sorting = useSelector(state => state.sorting);
    const brands = useSelector(state => state.brands);
    const tags = useSelector(state => state.tags);

    useEffect(() => {
        let brandUrl = "";
        let tagUrl = "";
        if(brands.length > 0)
            brandUrl = "manufacturer=" + brands.join("&manufacturer=");
            tagUrl = "tags_like=" +  tags.join("&tags_like=");
        axios.get(url + '&' + sorting + brandUrl + '&' + tagUrl)
        .then(res => {
            setItems(res.data);
            setPageNumber(Math.ceil(res.headers["x-total-count"] / limit));
        })
    }, [sorting, brands, tags]);


    return (
        <div style={{ position: "absolute", top: 70, right: 300 }}>
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
        </div>
    );
}
 
export default Items;