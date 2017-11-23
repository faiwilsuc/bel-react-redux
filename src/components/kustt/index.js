import React from 'react';

import Navbar from '../shared/navbar';
import Kusttcontent from './kusttcontent';
import Kusttheader from './kusttheader';

export default class Kustt extends React.Component {

    render() {
        return (
            <div id="wrapper">
             <Navbar />
             <Kusttheader />
             <Kusttcontent />
            </div>
        );
    }

}