import React, { Component } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import Counter from "./Counter";

class CartModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            edit: false,
            bodyContent: true,
            itemToEdit: [],
            updatedCartItem: {}
        }
    }

    componentDidMount() {
        this.setState({
            cart: this.props.cart
        })
    }

    editCart = () => {
        console.log("Editing cart in Modal component")
        // console.log("Item to edit: " + JSON.stringify(item))

        // this.setState({
        //     itemToEdit: item
        // })
        this.setState({
            edit: true,
            bodycontent: "false"
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
        }, () => this.checkState())
    }

    checkState = () => {

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