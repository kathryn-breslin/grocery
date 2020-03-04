import React from "react";

function Checkout (props) {
    return (
        <div>
            <h1>Checkout Page</h1>
            {console.log("Props on the checkout page: " + JSON.stringify(props.history.location.state))}
        </div>
    )
 }

 export default Checkout;