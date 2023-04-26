import React from "react";
import icon from "../assets/images/restaurant-svgrepo-com.svg"

function Header(props) {
    const headerStyle = {
        padding: "20px", 
        backgroundColor: "#26758E",
        margin: "0px"};
    return (
        <div style={headerStyle}>
            <div><img style={{width: "10%"}} src={icon} alt="restaurant image" /></div>
            <h1>My Tasty Place</h1>
        </div>
    );
}

export default Header;