import React, { Component } from "react";
import Item from "./Item";
class Groceries extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {console.log("Console log on the Groceries page, 'this.props.allItems': " + JSON.stringify(this.props.allItems))}
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
                        />
                    )
                })}
            </div>
        )

    }

}

export default Groceries;