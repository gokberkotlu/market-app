import "./navbar.css";
import marketImage from "../../assets/images/market.svg";
import lockImage from "../../assets/images/lock.svg";
import { useSelector } from "react-redux";


const Navbar = () => {

    const totalPrice = useSelector(state => state.totalPrice);

    return (
        <nav className="navbar-container">
            <img src={marketImage} className="navbar-container-logo" alt="Header Market Logo"></img>
            <div className="navbar-basket">
                <div className="navbar-basket-content">
                    <img src={lockImage} style={{fill: "#fff"}} alt="Basket Lock Logo" />
                    <span>₺ { totalPrice.toFixed(2) }</span>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;