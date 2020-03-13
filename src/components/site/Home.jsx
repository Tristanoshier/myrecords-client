import React from 'react';
import Sidebar from './Sidebar';

const Home = (props) => {
    return (
        <div>
            <Sidebar token={props.token} clickLogout={props.clickLogout} />
        </div>
    )
}

export default Home;
