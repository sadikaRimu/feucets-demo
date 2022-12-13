import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const WalletAddressRequestType = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-primary fw-bold'>Wallet Address</Form.Label>
                    <Form.Control className='w-50' type="text" placeholder="Wallet Address..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-primary fw-bold'>Request Type</Form.Label>
                    <div className='d-flex'>
                        <Form.Control value='20 Test Link' readOnly className='w-25 me-2' type="text" placeholder="" />
                        <Form.Control value='0.5 ETH' readOnly className='w-25' type="text" placeholder="" />
                    </div>
                </Form.Group>

            </Form>
        </div>
    );
};

export default WalletAddressRequestType;