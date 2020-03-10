import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Counter from "./Counter";
import { Link } from "react-router-dom";
import { Divider } from '@material-ui/core';



const StyledBadge = withStyles(theme => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

class TemporaryDrawerComp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            right: false,
            cart: [],
            edit: false,
            itemToEdit: [],
            updatedCartItem: {}
        }

        this.toggleDrawer = this.toggleDrawer.bind(this);
        // this.editCart = this.editCart.bind(this);
        // this.editTransition = this.editTransition.bind(this);
        this.saveUpdate = this.saveUpdate.bind(this);
        this.saveUpdatedItem = this.saveUpdatedItem.bind(this);
    }

    componentDidMount() {
        this.setState({
            cart: this.props.cart
        })
    }

    // editCart = () => {
    //     console.log("Editing cart in Modal component")
    //     // console.log("Item to edit: " + JSON.stringify(item))

    //     this.setState({
    //         edit: true,
    //     }, () => this.editTransition())

    // }

    // editTransition = () => {
    //     const editCartItem = this.state.edit;
    //     // const editItemInCart = this.state.itemToEdit;

    //     console.log("PROPS in Edit Transition Function: " + JSON.stringify(this.props))
    //     // console.log("Edit state: " + this.state.edit)
    //     // console.log("Item to edit: " + JSON.stringify(editItemInCart))

    //     if (editCartItem) {
    //         return (
    //             <>
    //                 <Counter
    //                     quantity={this.props.quantity}
    //                     newQuantity={this.props.newQuantity}
    //                 />
    //                 <Button variant="primary" onClick={() => this.saveUpdate(this.props)}>Save</Button>
    //             </>
    //         )
    //     }
    // }

    //this function is called when the user
    //clicks the 'Save' button that is rendered
    //only if the counter is shown

    //it then calls the 
    //saveUpdateItem function
    //which takes in the new state and calls
    //this.props.addNewProductToCart in App.js

    //this.props.addNewProductToCart in App.js
    //resets the 'quantity' state and renders
    //the new total in the Jumbotron

    saveUpdate = () => {
        // console.log("Save update");
        // console.log("Item to be saved.")
        let cartcartcart = {}

        // console.log("PROPS in SaveUpdate function: " + JSON.stringify(this.props));
        this.props.cart.map(item => {
            cartcartcart = {
                image: item.image,
                title: item.title,
                id: item.id,
                quantity: this.props.quantity
            }
        })

        this.setState({
            updatedCartItem: cartcartcart
        }, () => this.saveUpdatedItem())
    }

    saveUpdatedItem = () => {
        console.log("This is the state checker: " + JSON.stringify(this.state.updatedCartItem))
        this.props.addNewProductToCart(this.state.updatedCartItem)
    }

    toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({
            ...this.state, [side]: open
        })
    }

    sideListElement = side => {
        if (this.props.cart.length > 0) {
            return (
                <div role='presentation' onClick={this.toggleDrawer(side, false)} onKeyDown={this.toggleDrawer(side, false)}>
                    <List>
                        {this.props.cart.map((item, index) => (
                            <ListItem button key={item.id} alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alit={item.title} src={item.image} />
                                </ListItemAvatar>

                                <ListItemText
                                    primary={item.title}
                                    secondary={"Quantity: " + item.quantity}
                                />
                                <ListItemText>
                                    <Counter
                                        quantity={this.props.quantity}
                                        newQuantity={this.props.newQuantity}
                                    />
                                    {/* <Button variant="primary" onClick={() => this.saveUpdate(this.props)}>Save</Button> */}
                                </ListItemText>
                                <Divider variant="inset" component="li" />
                                {/* <Button color="primary" onClick={() => this.editCart(item)}>Edit</Button> */}
                                <Button variant="primary" onClick={() => this.saveUpdate(this.props)}>Save Edit</Button>
                                <Button color="secondary" onClick={() => this.props.removeFromCart(item)}>Remove</Button>
                            </ListItem>
                        ))}
                        {console.log("PROPS IN SIDEBAR: " + JSON.stringify(this.props))}
                    </List>
                    <Divider />
                    <List>
                        <ListItem>
                            <Button color="secondary" onClick={this.toggleDrawer(side, false)}>Close</Button>
                            <Link to={{
                                pathname: "/checkout",
                                state: this.props.updatedCart
                            }}><Button color="primary">Checkout</Button></Link>
                        </ListItem>
                    </List>
                </div>
            )
        }
        return (
            <div role='presentation' onClick={this.toggleDrawer(side, false)} onKeyDown={this.toggleDrawer(side, false)}>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Your Cart"
                            secondary="No products in cart"
                        />
                    </ListItem>
                </List>
                <Divider />
            </div>
        )
    }

    render() {
        return (
            <div>
                {/* <Button onClick={this.toggleDrawer('right', true)}>Open Right</Button> */}
                <IconButton>
                    <StyledBadge onClick={this.toggleDrawer('right', true)} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
                <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
                    {this.sideListElement('right')}
                </Drawer>

            </div>
        )
    }
}

export default TemporaryDrawerComp;