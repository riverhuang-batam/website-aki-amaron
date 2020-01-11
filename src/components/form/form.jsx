import React from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'

const Forms = () =>(
    <div>
    <Form action= "https://formspree.io/bennywen10@gmail.com" method="POST">
        <FormGroup>
            <Label>E-mail</Label>
            <Input type="email" name="email" placeholder="E-mail"/>
        </FormGroup>
        <FormGroup>
            <Label>Username</Label>
            <Input type="name" name="name" placeholder="Username"/>
        </FormGroup>
        <FormGroup>
            <Label>Message</Label>
            <Input type="textarea" name="Message" placeholder="Message"/>
        </FormGroup>
        <Button color="success">Submit</Button>
    </Form>
    </div>
)
export default Forms;