import React, { Component } from 'react';


class PortfolioCard extends Component {

    

    render(){
    const data = this.props.data;
    
    const image = require('../../assets/images/'+ data.name +'.png');
    // const {urlImage} = this.props

    console.log(this.props.data.name);

        return (
            <div>
        <div className="card" style={{width: ""}}>
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.desc}</p>
            <a href={data.link} className="btn btn-primary">Lihat</a>
        </div>
        </div>
        </div>
    )
}
}

export default PortfolioCard;