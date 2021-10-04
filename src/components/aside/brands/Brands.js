import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addBrand, deleteBrand, resetBrand } from "../../../store/actions/BrandsActions";
import { companies_base_url } from "../../../utils/companies_base_url";
import "../aside-common.css";

const Brands = () => {

    const [companiesResponse, setCompaniesResponse] = useState([]);
    const [searchBrands, setSearchBrands] = useState("");
    
    const dispatch = useDispatch();
    const brands = useSelector(state => state.brands);

    const brandsList = useRef(null);

    useEffect(() => {
        axios.get(companies_base_url)
        .then(res => {
            if(res.status === 200) {
                setCompaniesResponse(res.data);
            }
        })
    }, []);

    return (
        <>
            <h4 className="filter-header">Brands</h4>
            <ul ref={brandsList} className="filter-container">
                <li>
                    <input type="text" placeholder="Search Brand"
                    className="search-box"
                    onChange={(e) => {
                        setSearchBrands(e.target.value);
                    }} />
                </li>
                <li className="checkbox-label-container">
                    <input type="checkbox" id="all-brand" name="brands" value="All"
                    className="checkbox-style"
                    onChange={(e) => {
                        dispatch(resetBrand());
                        for(let i = 2; i < brandsList.current.children.length; i++) {
                            brandsList.current.children[i].children[0].checked = false;
                        }
                    }}
                    />
                    <label htmlFor="all-brand">All</label>
                </li>
                { companiesResponse
                .filter(company => company.name.includes(searchBrands))
                .map(company => (
                    <li key={company.account} className="checkbox-label-container">
                        <input type="checkbox" id={company.slug} name="brands" value={company.slug}
                        checked={brands.includes(company.slug)}
                        className="checkbox-style"
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