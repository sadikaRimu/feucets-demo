import React from 'react';
import HomeContainer from './HomeContainer/HomeContainer';
import NoticeBar from './NoticeBar';
import RequestTestnetLink from './RequestTestnetLink';

const Home = ({ selectValue }) => {
    console.log(selectValue);
    return (
        <div>
            <NoticeBar></NoticeBar>
            <RequestTestnetLink></RequestTestnetLink>
            <HomeContainer
                selectValue={selectValue}
            ></HomeContainer>
        </div>
    );
};

export default Home;