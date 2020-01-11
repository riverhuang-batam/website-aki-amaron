import React, {Component} from 'react'
import NavBar from '../../components/navbar/navbar'
import Jumbotronaki from '../../components/jumbotronaki/jumbotronaki'

export default class Header extends Component{
    render(){
        return(
            <div>
            <NavBar/>
            <Jumbotronaki/>
            </div>
        )
    }
}