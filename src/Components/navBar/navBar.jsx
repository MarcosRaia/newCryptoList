import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Nav, Image, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../navBar/navStyle.css";
function Menu() {
    const [lgShow, setLgShow] = useState(false);
    const [type, setType] = useState([]);

    useEffect(() => {
        const get = async () => {
            await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
                .then(res => {
                    setType(res.data)
                    console.log(res.data)
                })
                .catch(error => console.log(error))
        }
        get()
    }, [])

    return <>
        <Nav className="navColor" activeKey="/home">
            <Link className='navLinkImage' to='/'><Image className='navImg' src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" /></Link>
            <div className='navLink d-flex'>
                <Nav.Item className='navItem'>
                    <Button onClick={() => setLgShow(true)}>Converter</Button>
                    <Modal
                        size="lg"
                        show={lgShow}
                        backdrop='static'
                        onHide={() => setLgShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Crypto Converter
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter the crypto amount" />         
                                </Form.Group>
                            </Form>
                            <Form.Select aria-label='Default select example'>
                                <option>Choose your coin</option>
                                {type.map(coin => (
                                    <option> {coin.symbol} </option>
                                ))}
                            </Form.Select>
                            <hr></hr>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter the crypto amount" />         
                                </Form.Group>
                            </Form>
                            <Form.Select aria-label='Default select example'>
                                <option>Choose your coin</option>
                                {type.map(coin => (
                                    <option> {coin.symbol} </option>
                                ))}
                            </Form.Select>
                        </Modal.Body>
                    </Modal>

                </Nav.Item>
                <Nav.Item className='navItem'>
                    <Link to='/'>?</Link>
                </Nav.Item>
                <Nav.Item className='navItem'>
                    <Link to='/'>?</Link>
                </Nav.Item>
                <Nav.Item className='navItem'>
                    <Link to='/'>?</Link>
                </Nav.Item>
            </div>
        </Nav>


    </>
}

export default Menu;
