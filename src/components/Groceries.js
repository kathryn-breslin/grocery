import React, { Component } from "react";
import Item from "./Item";
class Groceries extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {console.log("Console log on the Groceries page: " + JSON.stringify(this.props.allItems))}

                {this.props.allItems.map(item => {
                    return (
                        <Item
                            key={item.id}
                            name={item.title}
                            image={item.image}
                            title={item.title}
                        />
                    )
                })}
            </div>
        )

    }

}

export default Groceries;