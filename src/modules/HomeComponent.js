import React, { Component } from "react";
import Navbar from '../common/layouts/Navbar';
import Profile from '../common/component/Profile';
import Portfolio from '../common/component/Portfolio';
import Contact from '../common/component/Contact';
import About from '../common/component/About';

class HomeComponent extends React.Component{

    render(){
        const {initialData,pageChangeToProfile,pageChangeToPortfolio,pageChangeToContact} = this.props;

        return (
            <div style={{boxSizing:"content-box",backgroundColor:"White"}} className=" bg-grad h-75 w-75 mx-auto rounded shadow">
                <Navbar pageChangeToProfile={pageChangeToProfile} pageChangeToPortfolio={pageChangeToPortfolio} pageChangeToContact={pageChangeToContact}/>
                <div className="container-fluid p-0 m-0 h-100">           
                    <div className="row h-100">
                        <div className="col-12 col-md-5 h-100">
                            <Profile />
                        </div>
                        <div className="col-12 col-md-7">
                        { initialData.page==1 &&  <About/>}
                        { initialData.page==2 &&  <Portfolio/>}
                        { initialData.page==3 &&  <Contact/>}
                
                        </div>
                    </div>
                </div>

                
            </div>
        )
    }
}

export default HomeComponent;