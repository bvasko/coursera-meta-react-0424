import React from "react";

function Header(props) {
    const headerStyle = {
        padding: "20px", 
        backgroundColor: "#26758E",
        margin: "0px"};
    return (
        <div style={headerStyle}>
            <h1>My Tasty Place</h1>
        </div>
    );
}

export default Header;