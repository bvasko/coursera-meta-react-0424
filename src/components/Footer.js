import { Link } from "react-router-dom";

function Footer() {
    return (
        <div style={{
            textAlign: "center"}} 
            className="copyright">
            <div style={{
                marginTop: "20px",
                padding: "20px",
                display: "flex", float: "left"}}>      
                <nav>
                <Link to="/" className="nav-item">Homepage</Link> |
                <Link to="/about" className="nav-item">About Little Lemon</Link> | 
                <Link to="/contact" className="nav-item">Contact</Link>
                </nav>
            </div>
        </div>
    )
}

export default Footer;