import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';

const Main = () => {
    const [selectValue, setSelectValue] = useState('Arbitrum Rinkeby');
    console.log(selectValue);
    return (
        <div>
            <Header
                setSelectValue={setSelectValue}
            ></Header>
            <Home selectValue={selectValue}></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;