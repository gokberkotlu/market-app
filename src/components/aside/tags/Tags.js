import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addTag, deleteTag, resetTag } from "../../../store/actions/TagsActions";
import { items_base_url } from "../../../utils/items_base_url";
import "../aside-common.css";

const Tags = () => {

    const [searchTags, setSearchTags] = useState("");

    const [allTags, setAllTags] = useState([]);

    const dispatch = useDispatch();
    const tags = useSelector(state => state.tags);

    const tagsList = useRef(null);

    useEffect(() => {
        axios.get(items_base_url)
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
            <h4 className="filter-header">Tags</h4>
            <ul ref={tagsList} className="filter-container">
                <li>
                    <input type="text" placeholder="Search Tag"
                    className="search-box"
                    onChange={(e) => {
                        setSearchTags(e.target.value);
                    }} />
                </li>
                <li className="checkbox-label-container">
                    <input type="checkbox" id="all-tag" name="tags" value="All"
                    className="checkbox-style"
                    onChange={(e) => {
                        dispatch(resetTag());
                        for(let i = 2; i < tagsList.current.children.length; i++) {
                            tagsList.current.children[i].children[0].checked = false;
                        }
                    }}/>
                    <label htmlFor="all-tag">All</label>
                </li>
                { allTags
                .filter(tag => tag.includes(searchTags))
                .map(tag => (
                    <li
                    className="checkbox-label-container"
                    key={tag}>
                        <input type="checkbox" id={tag} name={tag} value={tag}
                        className="checkbox-style"
                        checked={tags.includes(tag)}
                        onChange={e => {
                            if(e.target.checked) {
                                dispatch(addTag(e.target.value));
                            } else {
                                dispatch(deleteTag(e.target.value));
                            }
                            document.getElementById("all-tag").checked = false;
                        }}
                        />
                        <label htmlFor={tag}>{tag}</label>
                    </li>
                )) }
            </ul>
        </>
    );
}
 
export default Tags;