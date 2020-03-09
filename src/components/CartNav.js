import React from "react";
import { Nav } from "react-bootstrap";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./CartNav.css";

const StyledBadge = withStyles(theme => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

function CartNav(props) {
    return (
        <Nav className="justify-content-end" activeKey="/">
            <Nav.Item className="item-1">
                {props.searchBar}
            </Nav.Item>
            <Nav.Item className="item-2">
                <IconButton>
                    <StyledBadge badgeContent={parseInt(props.totalCartQuantity)} onClick={props.openClick} color="secondary">
                        <ShoppingCartIcon/>
                    </StyledBadge>
                </IconButton>
            </Nav.Item>
        </Nav>
    )
}

export default CartNav;