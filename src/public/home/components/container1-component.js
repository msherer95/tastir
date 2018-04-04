import React from 'react'; // eslint-disable-line
import Logo from '../assets/tastir_logo.svg';
import Platter from '../assets/platter.svg';
import Table from '../assets/table.svg';
import Bottle from '../assets/bottle.svg';

// first container on homepage
export const Container1 = () => {
    return (
        <div className="container-fluid container1">
            <div className="row nav-row">
                <img src={Logo} />
                <div className="hamburger-menu">
                        <div className="hamburger-el hamburger-top"></div>
                        <div className="hamburger-el hamburger-middle"></div>
                        <div className="hamburger-el hamburger-bottom"></div>
                </div>
                <div className="row sub-nav-row">
                    <p>Customers</p>
                    <p>Restaurants</p>
                    <p>About</p>
                    <p>Contact</p>
                    <div className="signin-btn"><a href="/signin">SIGN IN</a><div className="btn-outline"></div></div>
                </div>
            </div>
            <div className="popout-menu">
                <p>Customers</p>
                <p>Restaurants</p>
                <p>About</p>
                <p>Contact</p>
                <p>Sign In</p>
            </div>
            <div className="row container1-tile-row">
                <div id="platter-tile">
                    <img src={Platter} style={{height: 70, width: 110}} />
                    <div id="platter-tile-shadow">
                    </div>
                </div>
                <div id="tastir-tile">
                    <img src={Table} style={{height: 110}} />
                </div>
                <div id="bottle-tile">
                    <div id="bottle-tile-shadow"></div>
                    <img src={Bottle} style={{height: 85}} />
                </div>
            </div>
            <div className="row catchphrase-row">
                <h1>Make dining an adventure. Let us be your guide.</h1>
            </div>
            <div className="row get-started-btn-row">
                <a href="signup">GET STARTED</a>
                <div className="btn-outline"></div>
            </div>
            <div id="container1-sep"></div>
        </div>
    );
};