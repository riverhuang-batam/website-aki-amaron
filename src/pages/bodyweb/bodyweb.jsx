import React from 'react'
import Amaron from '../../components/amaron/amaron'
import Forms from '../../components/form/form'
import Contact from '../../components/contact/contact'
import Maps from '../../components/maps/maps'
import {Spring} from 'react-spring/renderprops'
import {Container, Row, Col} from 'reactstrap'
const BodyWeb = () =>(
    
    <Spring
    From={{opacity: 0, marginTop: -5000}}
    to={{opacity: 1, marginTop: 0}}>
        {props =>
        (
            <div>
            <Amaron/>
            <Container style={props}>
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
        }
    </Spring>
)
export default BodyWeb;