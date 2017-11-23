import React from 'react';
import Faqitem from './faqitem';
import Sidebar from '../shared/sidebar';

export default class Faqcontent extends React.Component {

    render() {
        let faqs = [
            {
                'headerContent': 'Hoe reis ik vlot mee met de Kusttram?',
                'bodyContent': `
                    <ul><li>Open de deur door een duw op de verlichte knop en laat eerst de mensen uitstappen.</li> 
                    <li>Stap daarna zelf in. Een fluitsignaal verwittigt de passagiers bij het automatisch sluiten van de deuren. Even op de trede staan verhindert het dichtklappen van de deuren.</li>
                    <li>Blijf niet bij de deuren staan, maar schuif door, dan kunnen er meer mensen meereizen.</li> 
                    <li>Neem geen extra zetel in voor de bagage, dan is er ook voor de anderen nog een plaatsje vrij.</li> 
                    <li>Op de Kusttram hangt een plan zodat u het volledige traject kunt volgen. De halteaankondiging toont je welke halte er aan komt.</li>
                    <li> Wil je afstappen aan de volgende halte? Bel dan ruim op voorhand en ga  naar de deur zodra de Kusttram de halte nadert.</li></ul>
                    `

            },
            {
                'headerContent': 'Is de Kusttram voor iedereen toegankelijk?',
                'bodyContent': `
                    <p>Bij de Kusttram is er in het midden een verlaagd gedeelte: dat is makkelijker opstappen, vooral met een rolstoel, rollator of een buggy. Scootmobielen en  zijn niet toegelaten op de Kusttram.</p>
                    <p>Aan sommige haltes werd een verhoogd perron aangelegd. Dit maakt het op- en afstappen nog makkelijker. Deze haltes vind je terug op <a href="https://www.delijn.be/nl/lijnen/lijn/5/500/2/0_Kusttram_De_Panne-Oostende-Knokke" target="_blank">het lijntraject van de Kusttram</a> en zijn aangeduid met een icoontje van een rolstoelgebruiker.</p>
                    `
            },
            {
                'headerContent': 'Mag mijn hond mee met de Kusttram?',
                'bodyContent': `<p>Een hond mag gratis mee als je hem aan de leiband of op je schoot houdt.</p>`
            },
            {
                'headerContent': 'Mag ik eten en drinken op de Kusttram?',
                'bodyContent': `<p>Eten en drinken is niet toegelaten op de Kusttram. Hou de Kusttram proper, dit is voor iedereen aangenamer. </p>`
            },
            {
                'headerContent': 'Mag ik mijn fiets meenemen op de Kusttram?',
                'bodyContent': `<p>Je mag, als de bezetting en de chauffeur het toelaten (max.2/voertuig), een fiets meenemen op de Kusttram. Hiervoor heb je een speciaal <a href="https://www.delijn.be/nl/vervoerbewijzen/ritkaarten-dagpassen/biljet-fiets.html" target="_blank">Biljet Fiets</a> nodig. Je moet je fiets wel zelf in-en uitladen aan de deur achteraan. Het biljet fiets betalen wij niet terug bij overbezetting.</p>`
            },
            {
                'headerContent': 'Hoe gebruik ik mijn vervoerbewijs?',
                'bodyContent': `
                    <ul>
                    <li>Koop je een vervoerbewijs in een Lijnwinkel? De Lijnwinkelbediende ontwaardt het graag voor jou.</li> 
                    <li>Heb je al een ticket? Registreer je rit bij elke opstap in het gele ontwaardingsapparaat.</li> 
                    <li>Een elektronische kaart hou je even voor de MOBIB-ontwaarder om je rit te registreren.</li>
                    </ul>`
            },
            {
                'headerContent': 'Waar vind ik een Lijnwinkel aan de kust?',
                'bodyContent': `
                    <p>In onze Lijnwinkels helpen we je graag verder met het kopen en ontwaarden van jouw vervoerbewijs. Als de Lijnwinkel open is, zal de tramchauffeur je geen vervoerbewijs verkopen.</p>
                    <p>Langs de kust zijn er een <a href='/waartekoop' >een verschillende Lijnwinkels</a>. De openingsuren van deze Lijnwinkels variëren naargelang de periode.</p>`
            },
            {
                'headerContent': 'Wat is een Kusttram+?',
                'bodyContent': `
                    <p>De Kusttram+ is een combinatiebiljet waarbij het vervoer en de toegang tot de attractie aan een voordelige prijs worden aangeboden.</p>
                    <p>Je kunt de Kusttram+ vanaf twee dagen op voorhand  kopen in onze Lijnwinkels aan de kust. Vermeld duidelijk de dag waarop je de kaart zult gebruiken.  De kaart is enkel op die ene dag geldig. Deze datum kun je aflezen op de kaart.</p>
                    <p>Welke attracties kan je bezoeken met Kusttram+? Hoeveel kost je uitstap inclusief vervoer met de Kusttram? <a href="https://www.delijn.be/nl/kusttram/kusttramactie/partners.html" target="_blank">Lees meer.</a></p>`
            },
        ];
        return (
            <div className="container">
                <Sidebar />
                <div className="right-content pull-right col-lg-8 col-md-8 col-sm-8 col-xs-12">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="right_content faq_content">
                            <div className="faq_content_intro">
                                <h1>FAQ</h1>
                                <p>
                                    De Kusttram is hét vervoermiddel om de kust te ontdekken!
                                </p>
                                <ul>
                                    <li>68 haltes tussen De Panne en Knokke.</li>
                                    <li> In juli en augustus overdag om de 10 minuten een Kusttram, 's avonds om de 30 minuten een Kusttram.</li>
                                    <li> Stressvrij reizen langs het drukke verkeer.</li>
                                    <li> Geen parkeerplaats zoeken.</li>
                                    <li> Aantrekkelijke toeristische formules.</li>
                                    <li> Een Lijnwinkel aan verschillende haltes voor info en verkoop.</li>
                                </ul>
                                <p>Ontdek meer over de Kusttram aan de hand van deze veelgestelde vragen!

                                </p>
                            </div>
                        </div>
                        <div className="faq_accordion">
                            <div className="panel-group" id="accordion">
                                {faqs.map((faq, index) => <Faqitem key={index} id={index} parentId="#accordion"
                                    headerContent={faq.headerContent}
                                    bodyContent={faq.bodyContent} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}