

import React from 'react'; // eslint-disable-line
import dashedLineSVG from '../assets/dashed-line.svg';
import Table from '../assets/table.svg';

// third container on homepage
export const Container3 = () => {
    return (
        <div className="container-fluid container3">
            <div className="row container3-heading-row">
                <h1>For Restaurants</h1>
            </div>
            <div className="container3-subheading-row">
                <p>Want to expand your customer base? Tastir is great for marketing.</p>
            </div>
            <div className="row instructions-row">
                <div className="dashed-line-wrap">
                    <img src={dashedLineSVG} />
                </div>
                <div className="instructions">
                    <div className="instruction" id="instruction1">
                        <div className="instruction-heading">
                            <div className="instruction-num">
                                <h1>1</h1>
                            </div>
                            <h1 className="instruction-title">Make an account</h1>
                        </div>
                        <div className="instruction-text">
                            <p>
                                Enter some basic info, such as your restaurant name and a brief description. Save your merchant account or other payment method and you’re ready to go.
                            </p>
                        </div>
                    </div>
                    <div className="instruction" id="instruction2">
                        <div className="instruction-heading">
                            <div className="instruction-num">
                                <h1>2</h1>
                            </div>
                            <h1 className="instruction-title">Create a detailed tasting menu</h1>
                        </div>
                        <div className="instruction-text">
                            <p>
                                We provide a simple, yet flexible form for any kind of menu. You have complete control over menu architecture, food choices, and pricing. Feel free to create any variation of a tasting menu, such as a sampler platter (really anything that bundles food).
                            </p>
                        </div>
                    </div>
                    <div className="instruction" id="instruction3">
                        <div className="instruction-heading">
                            <div className="instruction-num">
                                <h1>3</h1>
                            </div>
                            <h1 className="instruction-title">Get ready for customers</h1>
                        </div>
                        <div className="instruction-text">
                            <p>
                                Give diners time to find your menu. Purchases will appear in your account after a succesful transcation. Diners will present virtual coupons before their dinner for your verification, which can quickly be cross-referenced with your own purchases data.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="for-restaurants-img">
                    <div id="for-restaurants-blue">
                        <div className="blue-stripe" id="stripe1"></div>
                        <div className="blue-stripe" id="stripe2"></div>
                        <div className="blue-stripe" id="stripe3"></div>
                        <div className="blue-stripe" id="stripe4"></div>
                        <div className="blue-stripe" id="stripe5"></div>
                        <div className="blue-stripe" id="stripe6"></div>
                        <div className="blue-stripe" id="stripe7"></div>
                        <div className="blue-stripe" id="stripe8"></div>

                        <div id="for-restaurants-shadow"></div>
                        <div id="for-restaurants-green"><img src={Table} /></div>
                    </div>
                </div>
            </div>
            <div id="fee-top-sep"></div>
            <div className="row fee-row">
                <p id="ten-perc">10%</p>
                <div id="fee-sep"></div>
                <p id="fee-desc">We’re here to help your business grow. As part of that commitment, we only charge you when our services have been utilized. There are no membership fees– instead, we charge 10% of each transcation. </p>
            </div>
            <div className="row create-menu-btn-row">
                <a href="/signup">CREATE A MENU</a>
                <div className="create-menu-btn-outline btn-outline"></div>
            </div>
            <div id="about-sep"></div>
        </div>
    );
};