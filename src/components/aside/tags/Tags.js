import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addTag, deleteTag, resetTag } from "../../../store/actions/TagsActions";
import { base_url } from "../../../utils/base_url";

const Tags = () => {

    const [searchTags, setSearchTags] = useState("");

    const [allTags, setAllTags] = useState([]);

    const dispatch = useDispatch();
    const tags = useSelector(state => state.tags);

    const tagsList = useRef(null);

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
            <input type="text" placeholder="Search Tag" onChange={(e) => {
                setSearchTags(e.target.value);
            }} />
            <ul ref={tagsList} style={{ height: 300, width: 400, overflowY: "scroll", borderWidth: 1, borderColor: "#000", borderStyle: "solid" }}>
                <li>
                    <input type="checkbox" id="all-tag" name="tags" value="All"
                    onChange={(e) => {
                        dispatch(resetTag());
                        for(let i = 1; i < tagsList.current.children.length; i++) {
                            tagsList.current.children[i].children[0].checked = false;
                        }
                    }}/>
                    <label htmlFor="all-tag">All</label>
                </li>
                { allTags
                .filter(tag => tag.includes(searchTags))
                .map(tag => (
                    <li
                    key={tag}>
                        <input type="checkbox" id={tag} name={tag} value={tag}
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