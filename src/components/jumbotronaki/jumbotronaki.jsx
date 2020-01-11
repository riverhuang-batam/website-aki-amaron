import React from 'react'
import {Jumbotron} from 'reactstrap'
import amaronjumbotron from '../../images/amarontemplate1.jpg'

const Jumbotronaki = () =>(
    <div>
        <Jumbotron style={{
            backgroundImage: `url(${amaronjumbotron})`,
            backgroundSize: 'cover',
            position: 'relative',
            padding:'10%',
            paddingBottom:'21%'
            
        }}
            fluid
            />
    </div>
)
export default Jumbotronaki;