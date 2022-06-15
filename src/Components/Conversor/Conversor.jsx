import React, { useEffect, useState } from 'react'
import Menu from '../navBar/navBar'
import { Form } from 'react-bootstrap';
import axios from 'axios';
function Conversor() {
    const [type, setType] = useState([])
    
    useEffect(() => {
        const get =  async () => {
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setType(res.data)
                console.log(res.data)
            })
            .catch(error => console.log(error))
        }
        get()
    }, [])
    return <>
        <Menu />
        <div className='container'>
            <Form.Select aria-label='Default select example'>
                {type.map(coin => (
                    <option> {coin.symbol} </option>
                ))}
            </Form.Select>
        </div>

    </>
}

export default Conversor;