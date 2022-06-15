import axios from "axios";
import "../index/listStyle.css"
import React, { useEffect, useState } from "react";
import { ListGroup, Image } from "react-bootstrap";
import {FcMoneyTransfer} from "react-icons/fc";
function Lista() {
    const [moeda, setMoeda] = useState([]);

    useEffect(() => {
        const get = async () => {
           await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => {
                setMoeda(res.data)
                console.log(res.data)
            })
            .catch(error => console.log(error))    
        }
        get()
    }, [])

    return <>
        <div className="cont container">
            {moeda.map(coin => (
               <ListGroup className="list">
                   <ListGroup.Item> <Image className="img" src = {coin.image} /> {coin.name} </ListGroup.Item>
                   <ListGroup.Item><FcMoneyTransfer className="price" /> USD {coin.current_price} </ListGroup.Item>
               </ListGroup>
            ))}
        </div>

    </>
}
export default Lista;