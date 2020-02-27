import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import Counter from "./Counter";
import ToastComponent from "./Toast";
import "./Item.css";

class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            itemForCart: {}
        }

    }

    addToCart() {
        console.log("Get the product")
        console.log(this.props)
        this.setState({
            itemForCart: {
                image: this.props.image,
                title: this.props.title,
                id: this.props.id,
                quantity: this.props.quantity
            }
        }, function () {
            //callback function to pass selected product to the 
            //function in app.js
            // console.log(this.props)
            // console.log(JSON.stringify(this.state.itemForCart))
            this.props.addNewProductToCart(this.state.itemForCart)
        })
    }

    render() {
        return (
            <>
                {/* <ToastComponent
                    showToast={this.props.showToast}
                    // close={this.props.close}
                    newItem={this.state.itemForCart}
                /> */}
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={this.props.image ? (this.props.image) : ("http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png")} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.name}
                        </Card.Text>
                        <Counter
                            quantity={this.props.quantity}
                            newQuantity={this.props.newQuantity}
                        />
                        <Button style={{ margin: '10px' }} variant="primary" onClick={() => this.addToCart(this.props)}>Add To Cart</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Item;