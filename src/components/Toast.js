import React from "react";
import { Toast } from "react-bootstrap";

function ToastComponent(props) {
    return (
        <div>
            <Toast show={props.show} onClose={props.show}>
                <Toast.Header>
                    <img src={props.image} width={64}
                        height={64}
                        className="mr-3" alt="" />
                    <strong className="mr-auto">Added to your cart!</strong>
                    <small>Just now..</small>
                </Toast.Header>
                <Toast.Body>You've added {props.quantity} units of {props.title} to your cart. </Toast.Body>
            </Toast>
        </div>
    )
}

export default ToastComponent;