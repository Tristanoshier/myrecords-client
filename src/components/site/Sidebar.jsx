import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Link, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';
import Collection from './Collection';
import Wishlist from './Wishlist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl, faCompactDisc, faListAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


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

        {/*MOBILE SIDEBAR */}
        <div className="mobile-navbar overflow">
            <ul className="mobile-navbar-list">
                <li className="mobile-item">
                    <Link className="mobile-link" to="/collection">
                        <FontAwesomeIcon className="mobile-icon" size="2x" icon={faCompactDisc} />
                    </Link>
                </li>
                <li className="mobile-item">
                    <Link className="mobile-link" to="/wishlist">
                        <FontAwesomeIcon className="mobile-icon icon-two" size="2x" icon={faListAlt} />
                    </Link>
                </li>
                <li className="mobile-item" onClick={props.clickLogout}>
                    <FontAwesomeIcon className="mobile-icon icon-three" size="2x" icon={faSignOutAlt} />
                </li>
            </ul>
        </div>

        <div className="sidebar-route">
            <Switch>
                <Route exact path="/"><Collection token={props.token} /></Route>
                <Route exact path="/collection"><Collection token={props.token} /></Route>
                <Route exact path="/wishlist"><Wishlist token={props.token} /></Route>
            </Switch>
        </div>
    </div>
)

export default SideBar;
