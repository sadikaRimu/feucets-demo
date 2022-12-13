import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBeer, BiUserCircle } from 'react-icons/fa';
import { IconName, HiUserCircle, HiOutlineCreditCard, HiCreditCard, HiPaperClip } from "react-icons/hi";
import Modal from 'react-bootstrap/Modal';
import walletConnect from '../../images/walletConnect.png';
import metaMask from '../../images/metaMask.png';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import userEvent from '@testing-library/user-event';
import WalletConnectInfo from '../Home/HomeContainer/WalletConnectInfo';


const Header = ({ setSelectValue }) => {
    const [show, setShow] = useState(false);

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSelect = (event) => {
        event.preventDefault();
        const form = event.target.value;
        setSelectValue(form);
    }
    return (
        <>
            <Navbar bg="light" expand="lg" className='container'>
                <Container fluid>
                    <Navbar.Brand className='fw-bold fs-2 text-primary' href='/'>Faucets</Navbar.Brand>
                    <Nav className='d-sm-flex flex-row'>
                        <div className='mx-2' variant='outline-primary'>
                            <Form.Select onChange={handleSelect} className='' aria-label="Default select example">
                                <option value="Arbitrum Rinkeby">Arbitrum Rinkeby</option>
                                <option value="Avalanche Fuji">Avalanche Fuji</option>
                                <option value="BNB Chain Testnet">BNB Chain Testnet</option>
                                <option value="Ethereum Rinkeby">Ethereum Rinkeby</option>
                                <option value="Fantom Testnet">Fantom Testnet</option>
                                <option value="Harmony Testnet">Harmony Testnet</option>
                                <option value="POA Network Sokol">POA Network Sokol</option>
                                <option value="Polygon Mumbai">Polygon Mumbai</option>
                            </Form.Select>
                        </div>
                        <Button className='fw-bold' onClick={handleShow} variant="outline-primary"><HiCreditCard className='mx-2' /><strong className='d-none d-lg-inline-block'>Connect Wallet</strong></Button>
                        {
                            isAuthenticated ? <button className='mx-2 rounded' onClick={() => logout({ returnTo: window.location.origin })}>
                                Log Out
                            </button> : <button className='mx-2 rounded' onClick={() => loginWithRedirect()}><HiUserCircle /></button>
                        }

                        <div>
                            <p>
                                {
                                    isAuthenticated && <p>{user?.name}</p>
                                }
                            </p>
                        </div>

                    </Nav>


                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className='fw-bold'>Connect your wallet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='d-flex flex-lg-row flex-sm-column-reverse'>
                                <div className='m-4'>
                                    <img className='w-75 mb-2' src={metaMask} alt='' />
                                    <h4 className='text-primary fw-bold'>MetaMask</h4>
                                </div>
                                <div className='m-4'>
                                    <img className='w-75 mb-2' src={walletConnect} alt='' />
                                    <h4 className='text-primary fw-bold'>WalletConnect</h4>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </Container>
            </Navbar>
            {
                // <WalletConnectInfo
                //     selectValue={selectValue}
                // ></WalletConnectInfo>
            }
        </>
    );
};

export default Header;