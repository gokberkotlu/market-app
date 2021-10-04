import Aside from "../aside/Aside";
import Items from "../items/Items";
import "./app-body.css";

const AppBody = () => {
    return (
        <main className="main-content">
            <Aside />
            <Items />
        </main>
    );
}
 
export default AppBody;