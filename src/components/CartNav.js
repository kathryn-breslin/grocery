import React from "react";
import { Nav } from "react-bootstrap";

function CartNav(props) {
    return (
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
                {/* <Nav.Link href="/home">Active</Nav.Link> */}
                {props.searchBar}
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Total: {props.totalCartQuantity}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={props.openClick}>View Cart</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default CartNav;