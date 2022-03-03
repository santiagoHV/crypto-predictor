import React, {useState, useEffect} from "react";
import { Form } from "react-bootstrap";
import CoinPage from "./CoinPage";
import './styles/CoinSelector.css'

const coins = ['BTC', 'ETH','SOL', 'ADA', 'XRP']

const CoinSelector = () => {
    const [selectedCoin, setSelectedCoin] = useState(coins[0])
    const [selectedCoinsData, setSelectedCoinsData] = useState([{
        x: new Date('2018-02-12').getTime(),
        y: 76
    }, {
        x: new Date('2018-02-1').getTime(),
        y: 80
    }])
    const [coinsData, setCoinsData] = useState()
    const [prediction, setPrediction] = useState()
    const [predictionList, setPredictionList] = useState([])

    useEffect(() => {
        getCoinsData()
        console.log(coinsData)
    },[])

    const getCoinsData = async () => {
        const response = await fetch('http://localhost:5000/get_data')
        const data = await response.json()
        const formattedData = {}
        Object.entries(data.old_data).forEach(([coin, list]) => {
            formattedData[coin] = list.map(item => {
                    return {
                        x: new Date(item.date),
                        y: parseFloat(item.price) 
                    }}
                )  
        })
        

        setCoinsData(formattedData)
        setSelectedCoinsData(formattedData[selectedCoin])
        setPredictionList(data.predictions)
        setPrediction(data.predictions[selectedCoin])
    }

    const handleChange = (e) => {
        setSelectedCoin(e)
        setSelectedCoinsData(coinsData[e])
        setPrediction(predictionList[e])

    }

    return (
        <div className="coin-selector">
            <h2>SELECT YOUR COIN</h2>
            <Form className="selector">
                {coins.map(coin => (
                    <Form.Check 
                        type={'radio'} 
                        name={'coin'}  
                        key={coin} 
                        className='coin-item'>
                        <Form.Check.Input 
                            type={'radio'} 
                            value={selectedCoin}
                            checked={selectedCoin === coin} 
                            id={coin}
                            onChange={() => handleChange(coin)}/>
                        <Form.Check.Label>{coin}</Form.Check.Label>
                    </Form.Check>
                ))}
            </Form>
            <CoinPage coin={selectedCoin} coinData={selectedCoinsData} prediction={prediction}/>
        </div>
    )
}

export default CoinSelector;