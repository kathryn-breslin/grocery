import React, { Component } from "react";
import "./Checkout.css";

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
    render() {
        if (this.state.show) {
            return (
                <>
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
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            )
        }
        else {
            return (
                <h1> Cart is being updated..</h1>
            )
        }
    }
}

export default Checkout;