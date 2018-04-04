
import React from 'react'; // eslint-disable-line


// // fourth container on homepage
export const Container4 = () => {
    return (
        <div className="container-fluid container4">
            <div className="row container4-heading-row">
                <h1>About Tastir</h1>
            </div>
            <div className="row container4-description-row">
                <div className="container4-description-left">
                    <h1>We really love food . . .</h1>
                    <p>
                        In fact, we created this platform selfishly— so that we could use it ourselves. We love tasting, cooking, exploring, anything food-related. We believe that tasting is the only way to truly discover new food, and sought to facilitate those discoveries via Tastir.
                    </p>
                </div>
                <div className="container4-description-right">
                    <div className="desc-right-shadow"></div>
                    <h1>. . .We've worked in food</h1>
                    <p>
                        We know how restaurants of all ages can struggle to bring in customers. Even with phenomenal food, it can be challenging to put yourself on the map amidst a sea of new cafes, or remain profitable when your highest-paying demographic is constantly evolving. Our mission is to introduce diners to incredible new foods, and provide a place for restaurants to show off without being killed by enormous marketing fees.
                    </p>
                </div>
            </div>
            <div className="row container4-subheading-row">
                <p>We’re here for you and welcome any concerns, suggestions, or questions you may have.</p>
            </div>
            <div className="contact-sep"></div>
            <div className="row container4-contact-row">
                <p>
                    tastir@gmail.com {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} (781) 343–1444 {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} 177 Maple St, Needham MA 02492
                </p>
            </div>
        </div>
    );
};