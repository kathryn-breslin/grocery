import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Counter from "./Counter";
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Divider from '@material-ui/core/Divider';
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
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={this.props.image ? (this.props.image) : ("http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png")} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text style={{ marginBottom: '40px' }}>
                            {this.props.name}
                        </Card.Text >
                        <Counter
                            quantity={this.props.quantity}
                            newQuantity={this.props.newQuantity}
                        />
                        <Divider style={{marginTop: '30px'}}/>
                        <IconButton style={{ marginTop: '10px', float: 'right' }} color="primary" aria-label="add to shopping cart" onClick={() => this.addToCart(this.props)}>
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Item;