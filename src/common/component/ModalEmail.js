import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  Form, FormGroup, Label, Input, FormText  } from 'reactstrap';

const ModalEmail = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
        <Button color="danger" onClick={toggle} className="p-2 my-2">{buttonLabel} <i class="fas fa-envelope"></i></Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>

                <Form action="mailto:hananhanafi76@gmail.com" method="post" encType="text/plain">
                    <FormGroup>
                        <Label for="exampleName">Name</Label>
                        <Input type="text" name="name" id="exampleName" placeholder="Nama" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="comment" id="exampleText" placeholder="Pesanmuu"/>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
                </ModalBody>
            <ModalFooter>
            </ModalFooter>
        </Modal>
        </div>
    );
}

export default ModalEmail;