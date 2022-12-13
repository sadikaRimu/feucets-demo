import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NoticeBar = () => {
    return (
        <>
            <Navbar className='justify-content-center' bg="primary" variant="dark">
                <Container className='text-center'>
                    <Navbar.Brand className='text-center' href="#home">
                        <h4 className='text-center'>Notice Here</h4>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default NoticeBar;