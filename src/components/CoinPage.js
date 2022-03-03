import React from 'react';
import Graphic from './Graphic';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/CoinPage.css'

const CoinPage = ({coin, coinData, prediction}) => {
    const lastPrice = coinData[coinData.length - 1]
    console.log(lastPrice)
    return (
        <div id="coin-selector">
            <h3>{coin}</h3>
            <Container className='coin-selector-container' >
                <Row className='coin-selector-row' >
                    <Col md={6}>
                        <Graphic coinData={coinData}/>
                    </Col>
                    <Col md={6} className={'data-container'} >
                        <h3>Precio actual</h3>
                        <div className='actual_price' >
                            <h4>US: {lastPrice ? lastPrice.y.toFixed(3) : 0}</h4>
                            <h5>{lastPrice ? lastPrice.x.toString() : 0}</h5>
                        </div>
                        <h3>Predicción a mañana</h3>
                        <div className='predicted_price'>
                            <h4>US: {prediction ? prediction.toFixed(3) : 0}</h4>
                        </div>
                        <h3>Margen de error</h3>
                        <div className='error' >
                            <h4>5%</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default CoinPage;