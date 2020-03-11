import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Link, Switch} from 'react-router-dom';
import Collection from './Collection';
import Wishlist from './Wishlist';

const SideBar = (props) => (
    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li className= "navbar-brand">My Records</li>
                <li><Link to="/collection">Collection</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
            </ul>
        </div>
        <div className= "sidebar-route">
            <Switch>
                <Route exact path="/collection"><Collection token={props.token} /></Route>
                <Route exact path="/wishlist"><Wishlist /></Route>
            </Switch>
        </div>
       
    </div>
)

export default SideBar;
