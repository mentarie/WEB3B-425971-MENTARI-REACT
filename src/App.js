import React, { useState } from 'react';
import logo from './logo.svg';
// import './App.css';
import { Container, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';



const cardData = [
  {
    nama : "Mentari ER",
    job : "UX Analyst",
    color : "primary"
  },
  {
    nama : "Hanan Hanafi",
    job : "Back End",
    color : "warning"
  },
  {
    nama : "Yuli Hardina",
    job : "Frontend End",
    color : "danger"
  },
  {
    nama : "Winston Wiradi P",
    job : "System Analyst",
    color : "info"
  },
  {
    nama : "Alfarel Zaki",
    job : "UI/UX Designer",
    color : "success"
  },
]


class App extends React.Component {

  render() {
    return(
    <div className="App">
      
      <Container>

      <Row>
        <Col  sm={{ size:4, offset:4 }}>
          {
            cardData.map(data=>
            <Card body color={data.color} style={{ borderColor: '#333', color:'white', margin:'10px' }}>
              <CardTitle>{data.nama}</CardTitle>
              <CardText>{data.job}</CardText>
            </Card>
            )
          }
          
        </Col>
      </Row>
    </Container>
    </div>

    );}
    
}

export default App;
