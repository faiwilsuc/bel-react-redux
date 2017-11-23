import React from 'react';
import Sidebar from '../shared/sidebar';
import $ from 'jquery';

export default class Formcontent extends React.Component {

    componentDidMount() {
        
        $(".Prus").click(function () {
            $(this).next('.dagpas-drop-content.row').toggle();
        });

    }
    render() {
        return (
            <div className="main_cont">
                <div className="container">
                    <Sidebar />
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 ">
                        <div className="right-content row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                <div className="de-dagpas">
                                    <div className="rounded-icons">
                                        <div className="icon-table">
                                            <div className="icon-tablecell">
                                                <img src="images/7.png" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <h5>De Lijn</h5>
                                    <h2>DE DAGPAS</h2>
                                    <p>
                                        Zorgeloos de kust ontdekken?
                                        De dagpas is het ideale vervoerbewijs.
                                        Met een dagpas reis je alleen
                                        of samen, één of meerdere
                                        dagen onbeperkt met de Kusttram.
                                    </p>
                                </div>
                                <div className="dagpas-drop-down">
                                    <span className="Prus">Prijs   <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    <div className="dagpas-drop-content row">
                                        <ul>
                                            <li className="clearfix">
                                                <span className="Prus-left"><a href="https://www.delijn.be/nl/vervoerbewijzen/ritkaarten-dagpassen/dagpas.html" target="_blank" rel="noopener noreferrer">Dagpas</a></span>
                                                <div className="Prus-right"> <span className="amount">€ 6,00</span> </div>
                                            </li>

                                            <li className="clearfix">
                                                <span className="Prus-left"><a href="https://www.delijn.be/nl/vervoerbewijzen/ritkaarten-dagpassen/dagpas.html" target="_blank" rel="noopener noreferrer">Dagpas kind</a></span>
                                                <div className="Prus-right"> <span className="amount">€ 4,00</span> </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="de-kusttram">
                                    <div className="rounded-icons">
                                        <div className="icon-table">
                                            <div className="icon-tablecell">
                                                <img src="images/Tram_p.png" alt="tram-img" />
                                            </div>
                                        </div>
                                    </div>
                                    <h5>Kusttram</h5>
                                    <h2>De Kusttram+</h2>
                                    <p>
                                        Het combinatiebiljet voor een uitstap
                                    aan de kust. Vervoer + toegang
                                    attractie: dubbel voordeel!
                                    </p>
                                </div>
                                <div className="dagpas-drop-down">
                                    <h3><a href="/kusttram_plus">Kusttram+ Partners</a></h3>
                                </div>
                            </div>
                        </div>

                        <div className="right-content row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="de-dagpas">
                                    <div className="rounded-icons">
                                        <div className="icon-table">
                                            <div className="icon-tablecell">
                                                <img src="images/star.png" alt="star-img" />
                                            </div>
                                        </div>
                                    </div>
                                    <h5>Kusttram</h5>
                                    <h2>Speciale vervoerbewijzen voor de kust</h2>
                                    <p>
                                        Extra oplossingen om u aan de
                                        kust nog beter te bedienen
                                    </p>
                                </div>
                                <div className="dagpas-drop-down">
                                    <span className="Prus">Prijs<i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    <div className="dagpas-drop-content row">
                                        <ul>
                                            <li className="clearfix">
                                                <span className="Prus-left">Evenementenbiljet</span>
                                                <div className="Prus-right"><span className="amount">€ 4,00 </span> </div>
                                            </li>
                                            <li className="clearfix">
                                                <span className="Prus-left"><a href="https://www.delijn.be/nl/vervoerbewijzen/ritkaarten-dagpassen/meerdagenpas-kind-west-vlaanderen.html">Meerdagenpas Kind</a></span>
                                                <div className="Prus-right"> <span>Meer weten</span></div>
                                            </li>
                                            <li className="clearfix">
                                                <span className="Prus-left"><a href="https://www.delijn.be/nl/vervoerbewijzen/ritkaarten-dagpassen/zevendagenpas-west-vlaanderen.html">Zevendagenpas</a></span>
                                                <div className="Prus-right"> <span className="amount">€ 24,00</span></div>
                                            </li>

                                            <li className="clearfix">
                                                <span className="Prus-left"><a href="https://www.delijn.be/nl/vervoerbewijzen/ritkaarten-dagpassen/multimix-west-vlaanderen.html">Multimix</a></span>
                                                <div className="Prus-right"> <span className="amount">€ 20,00</span></div>
                                            </li>
                                            <li className="clearfix">
                                                <span className="Prus-left"><a href="https://www.delijn.be/nl/vervoerbewijzen/ritkaarten-dagpassen/biljet-fiets.html">Biljet Fiets</a></span>
                                                <div className="Prus-right"><span className="amount">€ 2,00</span></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="de-kusttram">
                                    <div className="rounded-icons">
                                        <div className="icon-table">
                                            <div className="icon-tablecell">
                                                <img src="images/b_icon.png" alt="icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <h5>De Lijn</h5>
                                    <h2>Andere vervoerbewijzen</h2>
                                    <p>
                                        Op de Kusttram kun je ook de
                                       andere vervoerbewijzen van De
                                       Lijn gebruiken.
                                    </p>
                                </div>
                                <div className="dagpas-drop-down">
                                    <span className="Prus">Prijs   <i className="fa fa-angle-down" aria-hidden="true"></i></span>

                                    <div className="dagpas-drop-content row">
                                        <ul>
                                            <li className="clearfix">
                                                <span className="Prus-left"><a href="https://www.delijn.be/nl/vervoerbewijzen/ritkaarten-dagpassen/biljet-enkele-rit.html">Biljet</a></span>
                                                <div className="Prus-right"><span className="amount">€ 3,00</span> </div>
                                            </li>

                                            <li className="clearfix">
                                                <span className="Prus-left"><a href="https://www.delijn.be/nl/vervoerbewijzen/ritkaarten-dagpassen/sms-ticket.html">SMS-ticket</a></span>
                                                <div className="Prus-right"><span className="amount">€ 2,00  </span> </div>
                                            </li>
                                            <li className="clearfix">
                                                <span className="Prus-left"><a href="https://www.delijn.be/nl/vervoerbewijzen/ritkaarten-dagpassen/m-ticket.html">M-ticket</a></span>
                                                <div className="Prus-right"> <span className="amount">€ 1,80</span> </div>
                                            </li>
                                            <li className="clearfix">
                                                <span className="Prus-left"><a href="https://www.delijn.be/nl/vervoerbewijzen/ritkaarten-dagpassen/lijnkaart.html">Lijnkaart</a></span>
                                                <div className="Prus-right">> <span className="amount">€ 15,00</span> </div>
                                            </li>

                                            <li className="clearfix">
                                                <span className="Prus-left"><a href="https://www.delijn.be/nl/vervoerbewijzen/ritkaarten-dagpassen/groepsbiljet.html">Groepsticket</a></span>
                                                <div className="Prus-right"> <span className="amount">€ 1,25</span> </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}