// webpack entry point for public routes

import './styles/index.scss'; // index styles for desktop
import pageLoad from './page_load_events.js';
import scrollEvents from './scroll_events.js';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import React from 'react'; // eslint-disable-line
import {App} from './components/index-component'; // eslint-disable-line
import {popOutShow, btnOutlineGrow} from './interactions.js';


$(document).ready(function() {

    // render entire app
    ReactDOM.render(<App />, document.getElementById('app'));

    pageLoad(); // run page load events when page ready

    // attach all scroll event listeners
	for (let event in scrollEvents) {
        scrollEvents[event]();
    }
    
    popOutShow();
    btnOutlineGrow();
});

