import React from 'react'
import {Jumbotron} from 'reactstrap'
import {Spring} from 'react-spring/renderprops'
import amaronjumbotron from '../../images/amarontemplate1.jpg'

const Jumbotronaki = () =>(
    <Spring
    from={{opacity:0, marginTop:-500}}
    to={{opacity:1, marginTop:0}}
    >
        {props =>
        <div style={props}>
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
    }
    </Spring>
    
)
export default Jumbotronaki;