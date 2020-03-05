import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Link, Switch} from 'react-router-dom';
import Collection from './Collection';
import Search from './Search';
import Wishlist from './Wishlist';
import {Button} from 'reactstrap';

const SideBar = (props) => (
    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li className= "navbar-brand">My Records</li>
                <li><Link to="/collection">Collection</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
            </ul>
        </div>
        <div className= "sidebar-route">
            <Switch>
                <Route exact path="/collection"><Collection /></Route>
                <Route exact path="/search"><Search /></Route>
                <Route exact path="/wishlist"><Wishlist /></Route>
            </Switch>
        </div>
        <Button className="logout-btn" onClick={props.clickLogout}>LOG OUT</Button>
    </div>
)

export default SideBar;
