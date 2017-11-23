import React from 'react';
import Sidebar from '../shared/sidebar';
import $ from 'jquery';

export default class Kusttcontent extends React.Component {
    componentDidMount() {

        $(".Prus").click(function () {
            $(this).next('.dagpas-drop-content.row').toggle();
        });

    }
    render() {
        return (
            <div className="inner-page-3 inner-page-2">
                <div className="container">
                    <Sidebar />
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <div className="right-content row">

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="de-dagpas">
                                    <div className="rounded-img">
                                        <img src="images/img1.png" alt="img" />
                                    </div>
                                    <h2>Plopsaland De Panne</h2>
                                    <p>
                                        Kom naar Plopsaland De Panne en waag je aan de houten coaster ‘Heidi The Ride’, naast meer dan 50 andere attracties voor jong en oud! Kabouter Plop, Mega Mindy, Bumba en al hun vrienden staan alvast te popelen om je welkom te heten in het vaakst bezochte park van België!
                                    </p>
                                </div>
                                <div className="dagpas-drop-down clearfix">
                                    <div className="Prus">
                                        <span className="pull-left">Kusttram+ <span className="b-content1">(vanaf 2 april 2017)</span> </span>
                                        <span className="pull-right">Prijs <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="dagpas-drop-content row">
                                        <ul>
                                            <li className="clearfix">
                                                <span className="Prus-left">Kind<span className="b-content">(85 cm - 1 meter)</span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">€ 10,00</span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <span className="Prus-left">Volwassene <span className="b-content">(+ 1 meter t.e.m. 69 jaar) </span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">  €34,00 </span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <span className="Prus-left">Volwassene <span className="b-content">(vanaf 70 jaar) </span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">  € 13,50 </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="de-kusttram">
                                    <div className="rounded-img">
                                        <img src="images/img2.png" alt="img" />
                                    </div>
                                    <h2>Plopsaqua</h2>
                                    <p>
                                        In Plopsaqua De Panne neemt Wickie de Viking je mee op avontuur in een magisch sneeuwlandschap met 4 zwembaden en 6 adembenemende glijbanen, waaronder de spectaculaire ‘Sky Drop’. Durf jij deze aan?
                                    </p>
                                </div>
                                <div className="dagpas-drop-down clearfix">
                                    <div className="Prus">
                                        <span className="pull-left">Kusttram+ <span className="b-content1">(vanaf 2 april 2017)</span> </span>
                                        <span className="pull-right">Prijs <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="dagpas-drop-content row">
                                        <ul>
                                            <li className="clearfix">
                                                <span className="Prus-left">Kind<span className="b-content">(85 cm - 1 meter)</span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">€ 10,00</span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <span className="Prus-left">Volwassene <span className="b-content">(+ 1 meter t.e.m. 69 jaar) </span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">  €18,00 </span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <span className="Prus-left">Volwassene <span className="b-content">(vanaf 70 jaar) </span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">  € 13,50 </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-content row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="de-dagpas">
                                    <div className="rounded-img">
                                        <img src="images/img3.png" alt="img" />
                                    </div>
                                    <h2>Sea Life</h2>
                                    <p>
                                        Ontvang een duikbril en logboek voor een ontdekkingsreis langs de Amazonerivier en door zeeën en oceanen. Ruim 50 aquaria tonen de wonderlijke onder­ en boven­waterwereld met haaien, piranha’s, otters, pinguïns, zeeschildpadden, ... binnen en buiten. Logboek vol? Tijd voor je super­duikerbadge!
                                    </p>
                                </div>
                                <div className="dagpas-drop-down clearfix">
                                    <div className="Prus">
                                        <span className="pull-left">Kusttram+ <span className="b-content1">(vanaf 2 april 2017)</span> </span>
                                        <span className="pull-right">Prijs <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="dagpas-drop-content row">
                                        <ul>
                                            <li className="clearfix">
                                                <span className="Prus-left">3+<span className="b-content"></span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">€ 17,30</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="de-kusttram">
                                    <div className="rounded-img">
                                        <img src="images/img4.png" alt="img" />
                                    </div>
                                    <h2>Sunparks Aquafun</h2>
                                    <p>Een dagje dolle waterpret voor jong en oud dankzij een kinder- en plonsbad, bubbelbaden en verkwikkende watervallen, glijbanen en niet te vergeten de ‘Black Hole’, een roetsjbaan in het donker! Niet alleen het zwemparadijs maar ook de rest van het vakantiepark is een bezoek waard! Ontdek hier wat je tijdens een dagje Sunparks kan beleven!</p>
                                </div>
                                <div className="dagpas-drop-down clearfix">
                                    <div className="Prus">
                                        <span className="pull-left">Kusttram+ <span className="b-content1">(vanaf 2 april 2017)</span> </span>
                                        <span className="pull-right">Prijs <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="dagpas-drop-content row">
                                        <ul>
                                            <li className="clearfix">
                                                <span className="Prus-left">4+<span className="b-content"></span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">€ 13,80</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-content row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="de-dagpas">
                                    <div className="rounded-img">
                                        <img src="images/img5.png" alt="img" />
                                    </div>
                                    <h2>Het Zwin Natuur Park</h2>
                                    <p>
                                        Het Zwin Natuur Park, de nieuwe natuur­gerichte topattractie, nodigt je uit. “Het Zwin” is gekend als internationale luchthaven voor trekvogels. Natuur, educatie, milieu, beleving, wandelen, ontdekken, eten en drinken … Je vindt  het in het nieuwe belevingspark te Knokke-­Heist.
                                </p>
                                </div>
                                <div className="dagpas-drop-down clearfix">
                                    <div className="Prus">
                                        <span className="pull-left">Kusttram+ <span className="b-content1">(vanaf 2 april 2017)</span> </span>
                                        <span className="pull-right">Prijs <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="dagpas-drop-content row">
                                        <ul>
                                            <li className="clearfix">
                                                <span className="Prus-left">Kind <span className="b-content">(6-17 jaar)</span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">€ 7,80</span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <span className="Prus-left">Volwassene<span className="b-content">(18+)</span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">€ 12,80</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="de-kusttram">
                                    <div className="rounded-img">
                                        <img src="images/img6.png" alt="img" />
                                    </div>
                                    <h2>Storms Expo</h2>
                                    <p>Beleef het op 350 meter in zee … In de Belgium Pier ondervind je de expo STORMS letterlijk aan den lijve: via verrassende simulaties, projecties, speciale effecten en onverwachte situaties waarin je als argeloze bezoeker terechtkomt. Edutainment ten top!
                                </p>
                                </div>
                                <div className="dagpas-drop-down clearfix">
                                    <div className="Prus">
                                        <span className="pull-left">Kusttram+ <span className="b-content1">(vanaf 2 april 2017)</span> </span>
                                        <span className="pull-right">Prijs <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="dagpas-drop-content row">
                                        <ul>
                                            <li className="clearfix">
                                                <span className="Prus-left">Kind<span className="b-content">(4 t.e.m. 12 jaar)</span></span>
                                                <div className="Prus-right"> <span className="amount">€ 8,50</span> </div>
                                            </li>
                                            <li className="clearfix">
                                                <span className="Prus-left">Volwassene <span className="b-content">(13+)</span></span>
                                                <div className="Prus-right"> <span className="amount">€ 10,50</span> </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-content row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="de-dagpas">
                                    <div className="rounded-img">
                                        <img src="images/img7.png" alt="img" />
                                    </div>
                                    <h2>Mercator</h2>
                                    <p>
                                        De pas gerenoveerde driemaster uit 1932 van bijna 80
                                        meter lang is het enige historische zeilschip dat België
                                        rijk is. Het schip heeft heel wat te vertellen want door
                                        de jaren heen voer het zowat op alle wereldzeeën. Het
                                        authentieke interieur werd behouden en vormt het
                                        kader voor een verrassend nautisch museum.
                                    </p>
                                </div>
                                <div className="dagpas-drop-down clearfix">
                                    <div className="Prus">
                                        <span className="pull-left">Kusttram+ <span className="b-content1">(vanaf 2 april 2017)</span> </span>
                                        <span className="pull-right">Prijs <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="dagpas-drop-content row">
                                        <ul>
                                            <li className="clearfix">
                                                <span className="Prus-left">Kind <span className="b-content">(4-12 jaar)</span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">€ 5,50</span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <span className="Prus-left">Volwassene<span className="b-content">(13+)</span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">€7,00</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="de-dagpas">
                                    <div className="rounded-img">
                                        <img src="images/img7.png" alt="img" />
                                    </div>
                                    <h2>Zandsculpturen</h2>
                                    <p>
                                        Disney Sand Magic viert de 25ste verjaardag
                                        van Disneyland® Paris op het Groot Strand van
                                        Oostende. Artiesten uit de hele wereld creëren
                                        een sprookjeswereld in zand, met deze zomer
                                        alle personages van Disney, Pixar, Star Wars
                                        en Marvel in de hoofdrollen. Beleef de magie
                                        van Disneyland® Paris op het Groot Strand van
                                        Oostende!
                                    </p>
                                </div>
                                <div className="dagpas-drop-down clearfix">
                                    <div className="Prus">
                                        <span className="pull-left">Kusttram+ <span className="b-content1">(vanaf 2 april 2017)</span> </span>
                                        <span className="pull-right">Prijs <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="dagpas-drop-content row">
                                        <ul>
                                            <li className="clearfix">
                                                <span className="Prus-left">Kind <span className="b-content">(4-11 jaar)</span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">€ 9,00</span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <span className="Prus-left">Volwassene<span className="b-content">(12+)</span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">€13,00</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="right-content row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="de-dagpas">
                                    <div className="rounded-img">
                                        <img src="images/img7.png" alt="img" />
                                    </div>
                                    <h2>3D World, Magic & Fun</h2>
                                    <p>
                                        (24/06/2017 - 03/09/2017)<br />
                                        Gebaseerd op humor, plezier maken en foto’s
                                        nemen… Dit jaar met tal van 3D animaties,
                                        wat nog meer pit geeft aan het event. Laat je
                                        verrassen door de vele nieuwigheden!

                                    </p>
                                </div>
                                <div className="dagpas-drop-down clearfix">
                                    <div className="Prus">
                                        <span className="pull-left">Kusttram+ <span className="b-content1">(vanaf 2 april 2017)</span> </span>
                                        <span className="pull-right">Prijs <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="dagpas-drop-content row">
                                        <ul>
                                            <li className="clearfix">
                                                <span className="Prus-left">Kind <span className="b-content">(6-11 jaar)</span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">€ 10,50</span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <span className="Prus-left">Volwassene<span className="b-content">(12+)</span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">€13,00</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="de-dagpas">
                                    <div className="rounded-img">
                                        <img src="images/img7.png" alt="img" />
                                    </div>
                                    <h2>Magritte Experience</h2>
                                    <p>
                                        Betreed een reuzenbolhoed op het strand van
                                        Knokke en ervaar een unieke virtual reality tour
                                        door Magritte’s bekendste werken. Grijp de
                                        unieke kans om in het casino zijn allergrootste
                                        werk (meer dan 300m) te zien. Zo beleefde je de
                                        magie van Magritte nog nooit!
                                    </p>
                                </div>
                                <div className="dagpas-drop-down clearfix">
                                    <div className="Prus">
                                        <span className="pull-left">Kusttram+ <span className="b-content1">(vanaf 2 april 2017)</span> </span>
                                        <span className="pull-right">Prijs <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="dagpas-drop-content row">
                                        <ul>
                                            <li className="clearfix">
                                                <span className="Prus-left">Kind <span className="b-content">(6-12 jaar)</span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">€ 12,95</span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <span className="Prus-left">Volwassene<span className="b-content">(13+)</span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">€14,95</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="right-content row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="de-dagpas">
                                    <div className="rounded-img">
                                        <img src="images/img7.png" alt="img" />
                                    </div>
                                    <h2>Oostende Koerse</h2>
                                    <p>
                                        Sport en feest aan zee op maandag met
                                        spannende toppaardenrennen, meeslepende
                                        ambiance tijdens de Vlaamse vedettenparade
                                        en een spectaculair vuurwerk als afsluiter. Een
                                        ideale uitstap met vrienden of met het hele
                                        gezin in een sfeer van grandeur en gezelligheid!
                                    </p>
                                </div>
                                <div className="dagpas-drop-down clearfix">
                                    <div className="Prus">
                                        <span className="pull-left">Kusttram+ <span className="b-content1">(vanaf 2 april 2017)</span> </span>
                                        <span className="pull-right">Prijs <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    </div>
                                    <div className="dagpas-drop-content row">
                                        <ul>
                                            <li className="clearfix">
                                                <span className="Prus-left">14+</span>
                                                <div className="Prus-right">
                                                    <span className="amount">€ 10,00</span>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <span className="Prus-left">Volwassene<span className="b-content">(13+)</span></span>
                                                <div className="Prus-right">
                                                    <span className="amount">€14,95</span>
                                                </div>
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