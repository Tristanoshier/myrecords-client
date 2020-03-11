import React from 'react';
import Sidebar from './Sidebar';
import {Button} from 'reactstrap';

const Home = (props) => {
    return (
        <div>
            <Button className="bg-dark" onClick={props.clickLogout}>LOG OUT</Button>
            <Sidebar token={props.token} />
        </div>
    )
}

export default Home;
