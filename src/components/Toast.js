import React from "react";
import { Toast } from "react-bootstrap";

function ToastComponent(props) {
    return (
        <div>
            <Toast show={props.show}>
                <Toast.Header>
                    <img src={props.image} className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Added to your cart!</strong>
                    <small>Just now..</small>
                </Toast.Header>
                <Toast.Body>{props.quantity} {props.title} has been added to your cart. </Toast.Body>
            </Toast>
        </div>
    )
}

export default ToastComponent;