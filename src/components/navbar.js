import React from "react"; 
import "../styels/navbar.css";
import {BsFillCartFill } from "react-icons/bs";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Shoping
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
          <BsFillCartFill size="1.7rem" color="black"/>
            <i className="fas fa-cart-plus"></i>
      
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
