import React from 'react'
import {Row, Col} from 'reactstrap'
const Videos = () =>(
    <div>
        <h1 className="text-center mt-4 mb-4">Videos</h1>
        <Row>
            <Col md="6">
            <iframe title="amaroncommercial" width="100%" height="350" src="https://www.youtube.com/embed/AadYM3bgeyg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Col>
            <Col md="6">
            <iframe title="amaroncommercial" width="100%" height="350" src="https://www.youtube.com/embed/_5oYtcjI06M" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Col>
        </Row>
    </div>
)
export default Videos;