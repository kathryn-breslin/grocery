import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import CartNav from "./CartNav";

function Jumbo(props) {
    return (
        <>
            {/* <CartNav
            searchBar={props.searchBar}
            totalCartQuantity={props.totalCartQuantity}
            openClick={props.openClick}
            /> */}
            <Jumbotron fluid>
                <Container>
                    {/* <div className="row">
                        <div className="col-4">
                            {props.searchBar}
                        </div>
                        <div className="col-4">
                            <h1>Your Cart</h1>
                            <p>Total: {props.totalCartQuantity}</p>
                            <button
                                className="btn btn-outline-primary my-2 my-sm-0"
                                onClick={props.openClick}>View Cart</button>
                        </div>
                    </div> */}
                    <h1>Hello World</h1>
                </Container>
            </Jumbotron>
        </>
    )
};

export default Jumbo;