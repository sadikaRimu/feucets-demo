import React from 'react';
import CheckCaptcha from './CheckCaptcha';
import RequestHistory from './RequestHistory';
import WalletAddressRequestType from './WalletAddressRequestType';
import WalletConnectInfo from './WalletConnectInfo';

const HomeContainer = ({ selectValue }) => {
    return (
        <div className='container'>
            <WalletConnectInfo
                selectValue={selectValue}
            ></WalletConnectInfo>
            <WalletAddressRequestType></WalletAddressRequestType>
            <CheckCaptcha></CheckCaptcha>
            <RequestHistory></RequestHistory>
        </div>
    );
};

export default HomeContainer;