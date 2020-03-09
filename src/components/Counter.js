import React, { Component } from "react";
// import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

// const useStyles = makeStyles(theme => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: 200,
//         },
//     },
// }));
// const classes = useStyles();


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
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        // this.setState({ quantity: event.target.value });
    };

    render() {
        return (
            <div>
                <form className="form">
                    <div class="form-inline justify-content-center">
                        <IconButton>
                            <RemoveCircleOutlineIcon onClick={this.decreaseValue} />
                        </IconButton>
                        <TextField style={{ width: '150px' }} id="outlined-basic" variant="outlined" type="text" name="quantity" value={this.state.quantity} onChange={this.handleEventChange} />
                        <IconButton>
                            <AddCircleOutlineIcon onClick={this.increaseValue} />
                        </IconButton>
                    </div>
                </form>

            </div>
        )
    }
}

export default Counter;