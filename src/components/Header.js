import { Link } from "react-router-dom";

function Header(props) {
    //inline style for the nav tag
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
    };

    return (
        <header>
            <h1 className="maintitle">Welcome to the Games</h1>
            <nav style={navStyle}>
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to="/games">
                    <div>GAMES</div>
                </Link>
                <Link to="/about">
                    <div>ABOUT/CONTACT</div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;