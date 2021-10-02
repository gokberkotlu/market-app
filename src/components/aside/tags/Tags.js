import { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../../../utils/base_url";

const Tags = () => {

    const [allTags, setAllTags] = useState([]);

    useEffect(() => {
        axios.get(base_url)
        .then(res => {
            let tagsArr = [];
            if(res.status === 200) {
                for(let i = 0; i < res.data.length; i++) {
                    res.data[i].tags.forEach(tag => {
                        if(!tagsArr.includes(tag)) {
                            tagsArr.push(tag);
                        }
                    })
                }
            }
            setAllTags(tagsArr);
        })
    }, []);

    return (
        <>
            <h3>Tags</h3>
            <ul style={{ height: 300, width: 400, overflowY: "scroll", borderWidth: 1, borderColor: "#000", borderStyle: "solid" }}>
                <li>
                    <input type="checkbox" id="all-tag" name="tags" value="All" />
                    <label htmlFor="all-tag">All</label>
                </li>
                { allTags.map(tag => (
                    <li key={tag}>
                        <input type="checkbox" id="tag" name="tag" value={tag} />
                        <label htmlFor="all-tag">{tag}</label>
                    </li>
                )) }
            </ul>
        </>
    );
}
 
export default Tags;