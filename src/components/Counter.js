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
        this.setState(prevState => ({
            quantity: Number(prevState.quantity) + 1
        }), function () {

            //this function was defined in App.js and then passed
            //as a prop to Groceries, then to Item, then to Counter. 
            //Counter is the furthest child from App.js in this structure. 
            //this.props.newQuantity is then called and passes this.state.quantity.
            //it sets the state in App.js. The number being rendered in the counter
            //is defined here.

            //The decreaseValue function works similarly to
            //the increaseValue function
            this.props.newQuantity(this.state.quantity)
        }
        )
    }

    decreaseValue = event => {
        event.preventDefault();

        if (this.state.quantity === 0) {
            return this.state.quantity;
        }
        else {
            this.setState(prevState => ({
                quantity: Number(prevState.quantity) - 1
            }), function () {

                //
                this.props.newQuantity(this.state.quantity)
            })
        }
    }

    handleEventChange = event => {
        event.preventDefault();
        this.setState({ quantity: event.target.value });
    };

    render() {
        return (
            <div>
                <form className="form">
                    <div className="form-inline">
                        <button onClick={this.decreaseValue} className="btn btn-light">
                            -
                    </button>
                        <input className="form-control input" name="quantity" value={this.state.quantity} onChange={this.handleChangeEvent} />
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