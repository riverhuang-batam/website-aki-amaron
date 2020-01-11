import React from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'

const Forms = () =>(
    <Form>
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
            <Input type="text-area" name="Message" placeholder="Message"/>
        </FormGroup>
        <Button body inverse color="success">Submit</Button>
    </Form>
)
export default Forms;