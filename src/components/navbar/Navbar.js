import "./navbar.css";
import marketImage from "../../assets/images/market.svg";
import lockImage from "../../assets/images/lock.svg";


const Navbar = () => {

    return (
        <nav className="navbar-container">
            <img src={marketImage} className="navbar-container-logo" alt="Header Market Logo"></img>
            <div className="navbar-basket">
                <div className="navbar-basket-content">
                    <img src={lockImage} style={{fill: "#fff"}} alt="Basket Lock Logo" />
                    <span>₺ 39,97</span>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;