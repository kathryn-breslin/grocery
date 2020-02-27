import React, { Component } from "react";
import Item from "./Item";
import ToastComponent from "./Toast";

class Groceries extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* {console.log("Console log on the Groceries page, 'this.props.allItems': " + JSON.stringify(this.props.allItems))} */}
                        {this.props.allItems.map(item => {
                            return (
                                <Item
                                    key={item.id}
                                    id={item.id}
                                    name={item.title}
                                    image={item.image}
                                    title={item.title}
                                    quantity={this.props.quantity}
                                    newQuantity={this.props.newQuantity}
                                    addNewProductToCart={this.props.addNewProductToCart}
                                    // toast={<ToastComponent
                                    //     showToast={this.props.showToast}
                                        // close={this.props.close}
                                    // />}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )

    }

}

export default Groceries;