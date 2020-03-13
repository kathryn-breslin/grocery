import React, { Component } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

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
        console.log("This.state.cart: " + this.state.cart)
    }
    removeFromCart = (removedProduct) => {
        this.setState(prevState => ({
            cart: prevState.cart.filter(item => item.id !== removedProduct.id)
        }))
    }

    render() {
        if ((this.state.show) && (this.state.cart)) {
            return (
                <div className="container" style={{ width: '600px' }}>
                    <h4>Review Your Order</h4>
                    {console.log("State in Checkout: " + JSON.stringify(this.state.cart))}
                    {console.log("Props on the checkout page: " + JSON.stringify(this.props.history.location.state))}
                    <Card style={{ minWidth: 275 }}>
                        <CardContent>
                            {this.state.cart.map(item => {
                                return (
                                    <Paper style={{ padding: 2, margin: 'auto', maxWidth: 500, marginTop: 20 }}>
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <ButtonBase style={{ width: 128, height: 128 }}>
                                                    <img src={item.image} style={{ margin: 'auto', display: 'block', maxWidth: '100%', maxHeight: '100%' }} />
                                                </ButtonBase>
                                            </Grid>

                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <Typography gutterBottom variant="subtitle1">
                                                            {item.title}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography>
                                                            <Button onClick={() => this.removeFromCart(item)}>Remove</Button>
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle1">Quantity: {item.quantity} </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                )
                            })}
                            <Link to={{
                                pathname: "/",
                                state: this.state.cart
                            }} style={{ float: 'right', marginTop: '40px', margin: '0 auto' }}>Continue Shopping</Link>
                        </CardContent>
                    </Card>
                </div>
            )
        }
        else {
            return (
                <div className="container" style={{ width: '600px' }}>
                    <h4>Review Your Order</h4>

                    <Card style={{ minWidth: 275 }}>
                        <CardContent>
                            <Paper style={{ padding: 2, margin: 'auto', maxWidth: 500, marginTop: 20 }}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Typography variant="subtitle1">No Items in Cart</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>

                            <Link to={{
                                pathname: "/",
                                state: this.state.cart
                            }} style={{ float: 'right', marginTop: '40px', margin: '0 auto' }}>Continue Shopping</Link>
                        </CardContent>
                    </Card>
                </div>
            )
        }
    }
}

export default Checkout;