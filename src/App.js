import React, { useState } from 'react';
import logo from './logo.svg';
// import './App.css';
import { Container, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';



const cardData = [
  {
    nama : "Hanan",
    job : "Project Manajer",
    color : "primary"
  },
  {
    nama : "Hanafi",
    job : "Front End",
    color : "warning"
  },
  {
    nama : "Hanan Hanafi",
    job : "Back End",
    color : "danger"
  },
  {
    nama : "Bambang",
    job : "System Analyst",
    color : "info"
  },
  {
    nama : "Pamungkas",
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
