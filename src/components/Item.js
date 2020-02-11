import React, { Component } from "react";

class Item extends Component {

    constructor (props){
        super (props);

        
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
            </div>
          </div>
        )
    }
}

export default Item;