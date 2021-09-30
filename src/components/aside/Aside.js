import Sorting from "./sorting/Sorting";
import Brands from "./brands/Brands";
import Tags from "./tags/Tags"

const Aside = () => {
    return (
        <aside>
            <h2>Aside</h2>
            <Sorting />
            <Brands />
            <Tags />
        </aside>
    );
}
 
export default Aside;