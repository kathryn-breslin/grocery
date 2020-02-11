import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.quantity
        }

        this.increaseValue = this.increaseValue.bind(this);
        this.decreaseValue = this.decreaseValue.bind(this);
    }

    increaseValue = event => {
        event.preventDefault();
        console.log("Increase!!!")

    }

    decreaseValue = event => {
        event.preventDefault();
        console.log("Decrease!!!")
    }

    handleEventChange = event => {
        event.preventDefault();
        this.setState({ total: event.target.value });
    };

    render() {
        return (
            <div>
                <form className="form">
                    <div className="form-inline">
                        <button onClick={this.decreaseValue} className="btn btn-light">
                            -
                    </button>
                        <input className="form-control input" name="quantity" value={this.state.total} onChange={this.handleChangeEvent} />
                        <button onClick={this.increaseValue} className="btn btn-light">
                            +
                    </button>
                    </div>
                </form>

            </div>
        )
    }
}

export default Counter;