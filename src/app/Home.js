import React, { Component } from 'react';
import Navbar from '../common/layouts/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/css/home.css';
import HomeComponent from '../modules/HomeComponent'


class Home extends Component{
    state = {
        page: 1,
    }
    pageChangeToProfile = () => {
        this.setState({
            page:1
        })
    }
    
    pageChangeToPortfolio = () => {
        this.setState({
            page:2
        })
    }

    pageChangeToContact = () => {
        this.setState({
            page:3
        })
    }

    render(){
        return (
            <HomeComponent
            initialData={this.state}
            pageChangeToProfile={this.pageChangeToProfile}
            pageChangeToPortfolio={this.pageChangeToPortfolio}
            pageChangeToContact={this.pageChangeToContact}/>
            
        )
    }
}

export default Home;