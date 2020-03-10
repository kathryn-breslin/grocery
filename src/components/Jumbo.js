import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Jumbo.css";

function Jumbo() {
    return (
        <>
            <Jumbotron>
                <Container>
                    <h1 className="title">Grocery</h1>
                </Container>
            </Jumbotron>
        </>
    )
};

export default Jumbo;