import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class EditModal extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <Modal openEdit={this.props.editModalOpen} onHide={this.props.cancel}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onHide={this.props.cancel}>
                            Close
                        </Button>
                        <Button variant="primary" onHide={this.props.cancel}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default EditModal;