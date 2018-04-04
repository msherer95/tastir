

import React from 'react'; // eslint-disable-line
import wineEllipseSVG from '../assets/wine-ellipse.svg';
import dollarEllipseSVG from '../assets/dollar-ellipse.svg';
import menuEllipseSVG from '../assets/menu-ellipse.svg';
import dollarSign from '../assets/dollar_sign.svg';
import wineGlassSVG from '../assets/wine_glass.svg';
import menuSVG from '../assets/menu.svg';

// second container on homepage
export const Container2 = () => {
    return (
        <div className="container-fluid container2">
            <div className="row container2-heading-row">
                <h1>No more boring nights out</h1>
            </div>
            <div className="row container2-description-row">
                <h1>Finding new restaurants is hard. Our mission is to improve your dining database by giving you a more comprehensive taste of each restaurant. We curate exclusive tasting menus from highly-rated restaurants so you can experience their multidimensionality.
                </h1>
            </div>
            <div className="row container2-tile-row">
                <div id="wine-tile">
                    <img src={wineGlassSVG} className="wine-tile-img" style={{height: 70}} />
                    <img src={wineEllipseSVG} className="wine-tile-ellipse" />
                    <p id="wine-tile-heading">Find Restaurants</p>
                    <p id="wine-tile-text">Search for a cuisine or utilize our recommendations, assembled using your location, preferences, and reviews. </p>
                    <div id="wine-tile-shadow"></div>
                </div>
                <div id="dollar-tile">
                    <img src={dollarSign} className="dollar-tile-img" style={{height: 120}} />
                    <img src={dollarEllipseSVG} className="dollar-tile-ellipse" style={{height: 100}} />
                    <p id="dollar-tile-heading">Pay Online</p>
                    <p id="dollar-tile-text">
                        Buy a menu and enjoy dinner without worrying about the check. Just show the generated coupon before your dinner!
                    </p>
                </div>
                <div id="menu-tile">
                    <div id="menu-tile-shadow"></div>
                    <img src={menuSVG} className="menu-tile-img" style={{height: 75}} />
                    <img src={menuEllipseSVG} className="menu-tile-ellipse" style={{height: 75}} />
                    <p id="menu-tile-heading">Long-term Menus</p>
                    <p id="menu-tile-text">
                        Menus have a long shelf life. Enjoy your purchased menus the same day, or save them until a later date.
                    </p>
                </div>
            </div>
            <div className="row signup-btn-row">
                <div id="signup-btn-sep"></div>
                <a href="/signup">SIGN UP</a>
                <div className="btn-outline"></div>
            </div>
            <div className="container2-sep"></div>
        </div>
    );
};