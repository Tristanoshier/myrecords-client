import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Link, Switch} from 'react-router-dom';
import { Button } from 'reactstrap';
import Collection from './Collection';
import Wishlist from './Wishlist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';

const SideBar = (props) => (
    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li><FontAwesomeIcon className="logo" size="3x" icon={faRecordVinyl} /></li>
                <li id="page-link"><Link to="/collection">Collection</Link></li>
                <li id="page-link"><Link to="/wishlist">Wishlist</Link></li>
                <li><Button className="logout-btn" onClick={props.clickLogout}>Log out</Button></li>
            </ul>
        </div>
        <div className= "sidebar-route">
            <Switch>
                <Route exact path ="/"><Collection token = {props.token} /></Route>
                <Route exact path="/collection"><Collection token={props.token} /></Route>
                <Route exact path="/wishlist"><Wishlist  /></Route>
            </Switch>
        </div>
       
       
    </div>
)

export default SideBar;
