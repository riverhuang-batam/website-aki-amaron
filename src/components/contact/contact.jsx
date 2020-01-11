import React from 'react'
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';
import {Row, Col, Container} from 'reactstrap'
const Contact = () => (
    <div style={{paddingTop:"20px", paddingBottom:"20px"}}>
        <Container>
        <Row>
            <Col md="12">
                <h1>
            <MdLocalPhone />

                <span
                    style={{
                    paddingLeft: "8%",
                    fontSize: '25px'
                }}>
                    08126783300 
                </span>
                </h1>
            </Col>
            <Col md="12">

            <h1>
            <MdEmail />

                <span
                    style={{
                    paddingLeft: "8%",
                    fontSize: '20px'
                }}>
                    bennywen10@gmail.com
                </span>
                </h1>
                
            <h1>
            <MdLocationOn />
                <span
                    style={{
                    paddingLeft: "8%",
                    fontSize: '20px'
                }}>
                    Batam, Nagoya
                </span>
                </h1>
                
            </Col>
        </Row>
        
        </Container>
    </div>
)

export default Contact;