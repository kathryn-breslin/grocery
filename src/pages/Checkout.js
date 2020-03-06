import React, { Component } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
class Checkout extends Component {
    constructor() {
        super();

        this.state = {
            cart: [],
            show: false
        }
    }

    componentDidMount() {
        this.setState({
            cart: this.props.history.location.state
        }, () => this.renderComp())
    }

    renderComp = () => {
        this.setState({
            show: true
        })
    }
    removeFromCart = (removedProduct) => {
        this.setState(prevState => ({
            cart: prevState.cart.filter(item => item.id !== removedProduct.id)
        }))
    }

    render() {
        if ((this.state.show) && (this.state.cart)) {
            return (
                <div className="container-fluid">
                    <h4>Review Your Order</h4>
                    <div className="container-fluid">
                        {console.log("State in Checkout: " + JSON.stringify(this.state.cart))}
                        {console.log("Props on the checkout page: " + JSON.stringify(this.props.history.location.state))}
                        {this.state.cart.map(item => {
                            return (
                                <div className="row">
                                    <div className="col-12 mt-3">
                                        <div className="card" key={item.id} id={item.id}>
                                            <div className="card-horizontal">
                                                <div className="img-square-wrapper">
                                                    <img className="" src={item.image} alt="Card image cap" />
                                                </div>
                                                <div className="card-body">
                                                    <h4 className="card-title">{item.title}</h4>
                                                    <p className="card-text">Quantity: {item.quantity}</p>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-muted">Remove Item</small>
                                                <button variant="warning" onClick={() => this.removeFromCart(item)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>Your cart is currently empty</h1>
                    <Link to="/">Continue Shopping</Link>
                </div>
            )
        }
    }
}

export default Checkout;