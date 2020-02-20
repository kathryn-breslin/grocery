import React  from "react";
import { Modal, Button } from "react-bootstrap";

function CartModal(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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