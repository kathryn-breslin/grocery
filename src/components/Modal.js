import React from "react";
import { Modal, Button, Card } from "react-bootstrap";

function CartModal(props) {
    if (props.cart.length > 0) {
        return (
            <Modal show={props.show} onHide={props.close}>
            <Modal.Header closeButton>
                <Modal.Title>Your Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.cart.map(item => {
                    return (
                        <Card style={{ width: '18rem' }} key={item.id}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.text}
                                    Quantity: {item.quantity}
                                </Card.Text>
                                <Button variant="primary">Remove</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.close}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        )
    }
    return (
        <>
            <Modal show={props.show} onHide={props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    No products in cart
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.close}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.close}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
// class CartModal extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             modalShow: '',
//             display: 'none'
//         };
//         this.openModal = this.openModal.bind(this);
//         this.closeModal = this.closeModal.bind(this);
//     }

//     openModal() {
//         this.setState({
//           modalShow: 'show',
//           display: 'block'
//         })
//       }

//       closeModal() {
//         this.setState({ 
//           modalShow: '',
//           display: 'none'
//         })
//       }

//     render() {
//         return (
//             <>
//                 <Modal show={props.show} onHide={handleClose}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Modal heading</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//                     <Modal.Footer>
//                         <Button variant="secondary" onClick={handleClose}>
//                             Close
//                         </Button>
//                         <Button variant="primary" onClick={handleClose}>
//                             Save Changes
//                         </Button>
//                     </Modal.Footer>
//                 </Modal>
//             </>
//         )
//     }
// }

export default CartModal;