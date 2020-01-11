import React, {Component} from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'
// , Nav, Collapse, NavbarToggler, NavItem
import Logo from '../../images/logowebamaron.png'
export default class NavBar extends Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this)

        this.state = {
            isOpen: false
        }
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return(
            <Navbar
            style={{
            top: 0,
            width: "100%",
            zIndex: "1030",
            paddingBottom: '15',
            backgroundColor: "#43D11D",
            opacity: "0.9"
        }}
        expand="md"
        >
            <NavbarBrand
            href="/"
            
            >
                <img src={Logo} alt={Logo} width="130px"/>
            </NavbarBrand>
            
        </Navbar>
            )
    }
}
