import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addBrand, deleteBrand, resetBrand } from "../../../store/actions/BrandsActions";

const Brands = () => {

    const companiesUrl = "http://localhost:8000/companies";

    const [companiesResponse, setCompaniesResponse] = useState([]);
    const [searchBrands, setSearchBrands] = useState("");
    
    const dispatch = useDispatch();

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
                dispatch(resetBrand());
            }} />
            <ul ref={brandsList}>
                <li>
                    <input type="checkbox" id="all-brand" name="brands" value="All" onChange={(e) => {
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
                        onChange={e => {
                            if(e.target.checked) {
                                dispatch(addBrand(e.target.value));
                            } else {
                                dispatch(deleteBrand(e.target.value));
                            }
                        }} />
                        <label htmlFor={company.slug}>{company.name}</label>
                    </li>
                )) }
            </ul>
        </>
    );
}
 
export default Brands;