import React from 'react';

import Formheader from './formheader';
import Formcontent from './formcontent';
import Navbar from '../shared/navbar';

export default class Formules extends React.Component {

    render() {
        return (
        <div id="wrapper">
            <Navbar />
            <Formheader />
            <Formcontent />
        </div>
       );
    }
}

