import React from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 import
import './NavBar.css';

const NavBar = ({ navbarTap }) => {
  console.log(navbarTap);
  return (
    <div className="NavbarWrap">
      <div className="Navbar">
        <ul className="NavbarList">
          {/* Link로 각 경로를 설정 */}
          <li><Link to="/outerwear">Outerwear</Link></li>
          <li><Link to={navbarTap === "MEN" ? "/jacket" : "/womentop"}>{navbarTap === "MEN" ? "Jacket" : "Top"}</Link></li>
          <li><Link to={navbarTap === "MEN" ? "/mentop" : "/dress"}>{navbarTap === "MEN" ? "Top" : "Dress"}</Link></li>
          <li><Link to="/bottoms">Bottoms</Link></li>
          <li><Link to="/shoes">Shoes</Link></li>
          <li><Link to="/underwear">Underwear</Link></li>
          <li><Link to="/accessories">Accessories</Link></li>
          <li><Link to="/bag">Bag</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
