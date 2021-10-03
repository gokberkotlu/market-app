import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addBrand, deleteBrand, resetBrand } from "../../../store/actions/BrandsActions";

const Brands = () => {

    const companiesUrl = "http://localhost:8000/companies";

    const [companiesResponse, setCompaniesResponse] = useState([]);
    const [searchBrands, setSearchBrands] = useState("");
    
    const dispatch = useDispatch();
    const brands = useSelector(state => state.brands);

    const brandsList = useRef(null);

    useEffect(() => {
        axios.get(companiesUrl)
        .then(res => {
            if(res.status === 200) {
                setCompaniesResponse(res.data);
            }
        })
    }, []);

    return (
        <>
            <h3>Brands</h3>
            <input type="text" placeholder="Search Brand" onChange={(e) => {
                setSearchBrands(e.target.value);
            }} />
            <ul ref={brandsList} style={{ height: 300, width: 400, overflowY: "scroll", borderWidth: 1, borderColor: "#000", borderStyle: "solid" }}>
                <li>
                    <input type="checkbox" id="all-brand" name="brands" value="All"
                    onChange={(e) => {
                        dispatch(resetBrand());
                        for(let i = 1; i < brandsList.current.children.length; i++) {
                            brandsList.current.children[i].children[0].checked = false;
                        }
                    }} />
                    <label htmlFor="all-brand">All</label>
                </li>
                { companiesResponse
                .filter(company => company.name.includes(searchBrands))
                .map(company => (
                    <li key={company.account}>
                        <input type="checkbox" id={company.slug} name="brands" value={company.slug}
                        checked={brands.includes(company.slug)}
                        onChange={e => {
                            if(e.target.checked) {
                                dispatch(addBrand(e.target.value));
                            } else {
                                dispatch(deleteBrand(e.target.value));
                            }
                            document.getElementById("all-brand").checked = false;
                        }} />
                        <label htmlFor={company.slug}>{company.name}</label>
                    </li>
                )) }
            </ul>
        </>
    );
}
 
export default Brands;