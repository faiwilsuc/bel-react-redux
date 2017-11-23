import React from 'react';

import Navbar from '../shared/navbar';
import Onnicontent from './onnicontent';
import Onniheader from './onniheader';

export default class Onni extends React.Component {

    render() {
        return (
            <div id="wrapper">
             <Navbar />
             <Onniheader />
             <Onnicontent />
            </div>
        );
    }

}