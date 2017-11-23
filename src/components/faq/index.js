import React from 'react';
import Navbar from '../shared/navbar';
import Faqcontent from './faqcontent';
import Faqheader from './faqheader';

export default class Faq extends React.Component {

    render() {
        return (
            <div id="wrapper">
                <Navbar />
                <Faqheader />
                <Faqcontent />
            </div>
        );
    }
}