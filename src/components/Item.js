import React, { Component } from "react";
import Counter from "./Counter";

class Item extends Component {

    constructor(props) {
        super(props);


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
                </div>
                <Counter/>
            </div>
        )
    }
}

export default Item;