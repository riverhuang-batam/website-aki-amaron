import React from 'react'
import Amaron from '../../components/amaron/amaron'
import Forms from '../../components/form/form'
import Contact from '../../components/contact/contact'
import Maps from '../../components/maps/maps'
import {Container, Row, Col} from 'reactstrap'
const BodyWeb = () =>(
    <div>
        
        <Amaron/>
        <Container>
            <h1 className="text-center mt-4 mb-4">Contact Us</h1>
            <Row>
                <Col md="6">
                <Contact/>    
                </Col>
                <Col md="6">
                <Forms/>                
                </Col>
            </Row>
            <Maps/>
        </Container>
    </div>
)
export default BodyWeb;