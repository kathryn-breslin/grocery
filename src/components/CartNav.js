import React from "react";
import { Nav } from "react-bootstrap";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import SvgIcon from "@material-ui/core/SvgIcon";
import "./CartNav.css";

function CartNav(props) {
    return (
        <Nav className="justify-content-end" activeKey="/">
            <Nav.Item className="item-1">
                {/* <Nav.Link href="/home">Active</Nav.Link> */}
                {props.searchBar}
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Total: {props.totalCartQuantity}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={props.openClick}>
                    <ShoppingCartIcon/>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default CartNav;