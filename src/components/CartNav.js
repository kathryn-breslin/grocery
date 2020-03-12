import React from "react";
import { Nav } from "react-bootstrap";
import TemporaryDrawerComp from "./DrawerTest";

import "./CartNav.css";

function CartNav(props) {
    return (
        <Nav className="justify-content-end" activeKey="/">
            <Nav.Item className="item-1">
                {props.searchBar}
            </Nav.Item>
            <Nav.Item className="item-2">
                <TemporaryDrawerComp
                    totalCartQuantity={props.totalCartQuantity}
                    openClick={props.openClick}
                    show={props.show}
                    close={props.close}
                    editCart={props.editCart}
                    removeFromCart={props.removeFromCart}
                    checkout={props.checkout}
                    cart={props.cart}
                    quantity={props.quantity}
                    newQuantity={props.newQuantity}
                    addNewProductToCart={props.addNewProductToCart}
                    addToTotal={props.addToTotal}
                    updatedCart={props.updatedCart}
                />
            </Nav.Item>
        </Nav>
    )
}

export default CartNav;