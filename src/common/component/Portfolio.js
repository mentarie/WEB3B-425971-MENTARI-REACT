import React from 'react';
import PortfolioCard from './PortfolioCard';


class Portfolio extends React.Component {
    state = {
        count: 0,

        portfolioData : [
            {
                name : "potensiap",
                title : "Website POTENSIAP",
                link : "http://www.potensiap.com",
                desc : "Ted UGM adalah acara tahunan dari Departemen Teknik Elektro dan Informatika Sekolah Vokasi Universitas Gadjah Mada. Saya tergabung sebagai IT Support yang menhandle website terutama merealisasikan design User Interface Webstie dengan HTML, CSS, dan Javascript."
            },
            {
                name : "tedugm",
                title : "Website TED UGM 2019",
                link : "https://www.tedugm.com",
                desc : "Ted UGM adalah acara tahunan dari Departemen Teknik Elektro dan Informatika Sekolah Vokasi Universitas Gadjah Mada. Saya tergabung sebagai IT Support yang menhandle website terutama merealisasikan design User Interface Webstie dengan HTML, CSS, dan Javascript."
            },
            {
                name : "bemkm",
                title : "Website BEM KM UGM 2019",
                link : "https://www.bemkm.ugm.ac.id",
                desc : "Ted UGM adalah acara tahunan dari Departemen Teknik Elektro dan Informatika Sekolah Vokasi Universitas Gadjah Mada. Saya tergabung sebagai IT Support yang menhandle website terutama merealisasikan design User Interface Webstie dengan HTML, CSS, dan Javascript."
            }
        ]
    }

    prevPortfolio = () => {
        const {count} = this.state;

        if(count==0){
            this.setState({
                count: 2
            })
            return;
        }
        const nextCount = count-1;
        this.setState({
            count: nextCount
        })
    }


    nextPortfolio = () => {
        const {count} = this.state;

        if(count==2){
            this.setState({
                count: 0
            })
            return;
        }
        const nextCount = count+1;
        this.setState({
            count: nextCount
        })
    }

    render(){
        const {count,portfolioData} = this.state;
    return (
        <div className="container h-100 mx-0 mt-5 p-0 position-relative d-flex align-items-center" style={{color:"#000533"}}>
            <span>

                    
        <h1 className="text-center">My Portfolio</h1>  

            <div className="row">
                <div onClick={this.prevPortfolio} className="col-2 d-flex align-items-center">
                    <a href="#" onClick={this.nextPortfolio}>
                    <i  style={{fontSize:"56px",color:"#f6d4b4"}} className="fas fa-arrow-circle-left ml-auto"></i>
                    </a>
                </div>
                <div className="col ">
                    {portfolioData.map((port,index)=>{
                        if(count==index){
                            return <PortfolioCard data={port}/>
                        }
                        
                    })}

                </div>
                <div  className="col-2 d-flex align-items-center">
                    <a href="#" onClick={this.nextPortfolio}><i  style={{fontSize:"56px",color:"#f6d4b4"}} className="fas fa-arrow-circle-right"></i></a>

                </div>
            </div>
            
            {/* <div className="row h-75 p-0 mr-5 position-absolute d-flex align-items-center w-50" style={{backgroundColor:"",overflowY:"scroll",bottom:"",left:"20%",right:"",border:"1px #f6d4b4 solid"}}>
                <div className="col">
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>

                </div>
            </div> */}
            </span>
        
        </div>
    )
}

}

export default Portfolio;