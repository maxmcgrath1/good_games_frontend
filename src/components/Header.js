import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'


function Header() {
    return (
        <div>
            <h1 className="maintitle">Welcome to Good Games!</h1>
            <Nav fill variant="tabs" defaultActiveKey="">
                <Nav.Item>
                    <Nav.Link href="/">HOME</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/games" href="/games">GAMES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/about" href="/about">ABOUT/CONTACT</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        LOGIN/SIGNUP
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Header;