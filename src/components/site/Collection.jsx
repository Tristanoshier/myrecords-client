import React from 'react';
import {Button} from 'reactstrap';
import Sidebar from './Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';


const Collection = (props) => {
    return (
        <div>
            <Router>
                <Sidebar />
            </Router>
            <h1>Collection</h1>
            <Button onClick={props.clickLogout}>LOG OUT</Button>
        </div>
    )
}

export default Collection;
