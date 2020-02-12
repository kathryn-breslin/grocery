import React, { Component } from "react";
import Counter from "./Counter";

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
        }, () => console.log("Props to add to cart: " + JSON.stringify(this.state.itemForCart)))
    }

    render() {
        return (
            <div className="card sm-4">
                <div className="row no-gutters">
                    <div className="col-sm-4">
                        <img
                            src={this.props.image ? (this.props.image) : ("http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png")}
                            className="card-img"
                            alt={this.props.title}
                        />
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                {this.props.title}
                            </h5>
                        </div>
                    </div>
                    <Counter
                        quantity={this.props.quantity}
                        newQuantity={this.props.newQuantity}
                    />
                </div>
                <div className="row no-gutters">
                    <div className="col-sm-4">
                        <button className="btn btn-outline-primary" onClick={() => this.addToCart(this.props)}>Add to Cart</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default Item;