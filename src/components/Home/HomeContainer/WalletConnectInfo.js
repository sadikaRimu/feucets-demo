
import Alert from 'react-bootstrap/Alert';
import React from 'react';
import { HiOutlineExclamation } from "react-icons/hi";

const WalletConnectInfo = ({ selectValue }) => {
    console.log(selectValue);
    return (
        <div>
            <Alert variant='primary'>

                <HiOutlineExclamation /> Your wallet is connected to <strong>{selectValue}</strong> , so you are requesting <strong>{selectValue}</strong> Link/ETH.
            </Alert>
        </div>
    );
};

export default WalletConnectInfo;