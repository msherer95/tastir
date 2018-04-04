
/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import {Container1} from './container1-component';
import {Container2} from './container2-component';
import {Container3} from './container3-component';
import {Container4} from './container4-component';
/* eslint-disable */

// homepage component combining all 4 containers
export const App = () => {
    return (
        <div>
            <Container1 />
            <Container2 />
            <Container3 />
            <Container4 />
        </div>
    );
};