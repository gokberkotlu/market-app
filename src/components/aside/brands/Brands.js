import { useState, useEffect } from "react";
import axios from "axios";

const Brands = () => {

    const companiesUrl = "http://localhost:8000/companies";

    const [companiesResponse, setCompaniesResponse] = useState([]);
    const [searchBrands, setSearchBrands] = useState("");



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
            <input type="text" placeholder="Search Brand" onChange={(e) => setSearchBrands(e.target.value)} />
            <ul>
                { companiesResponse
                .filter(company => company.name.includes(searchBrands))
                .map(company => (
                    <li key={company.account}>
                        <input type="checkbox" id={company.slug} name="brands" value={company.slug} />
                        <label htmlFor={company.slug}>{company.name}</label>
                    </li>
                )) }
            </ul>
        </>
    );
}
 
export default Brands;