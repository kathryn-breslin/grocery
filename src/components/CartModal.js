import React, { Component } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Counter from "./Counter";

class CartModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            edit: false,
            itemToEdit: [],
            updatedCartItem: {}
        }

        this.editCart = this.editCart.bind(this);
        this.editTransition = this.editTransition.bind(this);
        this.saveUpdate = this.saveUpdate.bind(this);
        this.saveUpdatedItem = this.saveUpdatedItem.bind(this);
    }

    componentDidMount() {
        this.setState({
            cart: this.props.cart
        })
    }

    editCart = () => {
        console.log("Editing cart in Modal component")
        // console.log("Item to edit: " + JSON.stringify(item))

        this.setState({
            edit: true,
        }, () => this.editTransition())

    }

    editTransition = () => {
        const editCartItem = this.state.edit;
        // const editItemInCart = this.state.itemToEdit;

        console.log("PROPS in Edit Transition Function: " + JSON.stringify(this.props))
        // console.log("Edit state: " + this.state.edit)
        // console.log("Item to edit: " + JSON.stringify(editItemInCart))

        if (editCartItem) {
            return (
                <>
                    <Counter
                        quantity={this.props.quantity}
                        newQuantity={this.props.newQuantity}
                    />
                    <Button variant="primary" onClick={() => this.saveUpdate(this.props)}>Save</Button>
                </>
            )
        }
    }

    //this function is called when the user
    //clicks the 'Save' button that is rendered
    //only if the counter is shown

    //it then calls the 
    //saveUpdateItem function
    //which takes in the new state and calls
    //this.props.addNewProductToCart in App.js

    //this.props.addNewProductToCart in App.js
    //resets the 'quantity' state and renders
    //the new total in the Jumbotron

    saveUpdate = () => {
        // console.log("Save update");
        // console.log("Item to be saved.")
        let cartcartcart = {}

        // console.log("PROPS in SaveUpdate function: " + JSON.stringify(this.props));
        this.props.cart.map(item => {
            cartcartcart = {
                image: item.image,
                title: item.title,
                id: item.id,
                quantity: this.props.quantity
            }
        })

        this.setState({
            updatedCartItem: cartcartcart
        }, () => this.saveUpdatedItem())
    }

    saveUpdatedItem = () => {
        console.log("This is the state checker: " + JSON.stringify(this.state.updatedCartItem))
        this.props.addNewProductToCart(this.state.updatedCartItem)
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
                                        {this.editTransition(this.props)}
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>
                            Close
                    </Button>
                        <Link to={{
                            pathname: "/checkout",
                            state: this.props.updatedCart
                        }}>Checkout</Link>
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
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default CartModal;