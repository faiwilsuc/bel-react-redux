import React from 'react';
import Sidebar from '../shared/sidebar';

export default class Onnicontent extends React.Component {
    render() {
        return (
            <div className="container">

                <Sidebar />
                <div className="right-content pull-right col-lg-8 col-md-8 col-sm-8 col-xs-12">
                    <div className="doe_niet_right_content">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div className="doe_niet">
                                <h1>Doe niet als Onni!</h1>
                                <h3>Geniet van de kust, maar heb ook aandacht voor de Kusttram!</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="doe_niet_image">
                                <img src="images/circleimg.png" alt="panda" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="doe_niet_hieronder">
                                <p>Hieronder enkele gouden veiligheidstips: </p>
                                <ul>
                                    <li>  De Kusttram heeft <strong>altijd voorrang,</strong> ook op fietsers en voetgangers en zelfs op het zebrapad.</li>
                                    <li>De Kusttram rijdt vaak langs duinen waar de <strong>zichtbaarheid minder is.</strong></li>
                                    <li><strong>Vermijd de bedding</strong> van de Kusttram en de bijhorende parkeerstroken.</li>
                                    <li>Kusttrams volgen elkaar snel op en kunnen uit <strong>twee richtingen</strong> komen.</li>
                                    <li>De Kusttram <strong>rijdt heel stil;</strong> vooral goed kijken!</li>
                                    <li>De Kusttram kan <strong>niet zomaar stoppen,</strong> hou rekening met de remafstand.</li>
                                    <li>Goed uitkijken naar de verkeersborden.</li>
                                    <li><strong>Kinderen goed begeleiden</strong> in het drukke vakantieverkeer.</li>
                                    <li>Neem bij het <strong>oversteken</strong> steeds de <strong>kortste weg.</strong></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="onni_met_videos">
                                <h3>Onni met ballon</h3>
                                <iframe src="https://www.youtube.com/embed/dGxhvRyk5dI?autoplay=0" width="645" height="350" title="video"></iframe>
                            </div>
                        </div>
                        <div className="clearfix col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="onni_met_videos">
                                <h3>Onni met koptelefoon</h3>
                                <iframe src="https://www.youtube.com/embed/CdJzd_DeC1w?autoplay=0" width="645" height="350" title="video" ></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}