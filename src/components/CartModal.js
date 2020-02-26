import React, { Component } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import Counter from "./Counter";

class CartModal extends Component {
    constructor() {
        super();

        this.state = {
            cart: [],
            edit: false,
            bodyContent: true
        }
    }

    componentDidMount() {
        this.setState({
            cart: this.props.cart
        })
    }

    editCart = (item) => {
        console.log("Editing cart in Modal component")
        this.setState({
            edit: true,
            bodycontent: "false"
        }, () => this.editTransition(item))

    }

    editTransition = (item) => {
        const editCartItem = this.state.edit;

        console.log("Edit state: " + this.state.edit)
        console.log("Item to edit: " + JSON.stringify(item))

        if (editCartItem) {
            return (
                <>
                    <Counter
                        quantity={this.props.quantity}
                        newQuantity={this.props.newQuantity}
                    />
                </>
            )
        }
    }

    render() {

        if (this.props.cart.length > 0) {
            return (
                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Your Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.cart.map(item => {
                            return (
                                <Card style={{ width: '18rem' }} key={item.id}>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>

                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            {item.text}
                                            Quantity: {item.quantity}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => this.editCart(item)}>Edit</Button>
                                        <Button variant="warning" onClick={() => this.props.removeFromCart(item)}>Remove</Button>

                                        {this.editTransition()}
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>
                            Close
                    </Button>
                        <Button variant="primary" onClick={this.props.checkout}>
                            Check Out
                    </Button>
                    </Modal.Footer>
                </Modal>
            )
        }
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Your Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        No products in cart
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.props.close}>
                            Add To Cart
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default CartModal;