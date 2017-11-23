import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="header_bottom">
                <div className="container clearfix kusttramheader">
                    <IndexLink to="/" className="header_bottom_width" activeClassName="activeLink">
                        <div className="events">
                            <img src="images/Tips-1.png" alt="tips-img" />
                            <img className="tips_image" src="images/Tips.png" alt="tips-img" />
                            <span>Jouw kusttram-tips</span>
                        </div>
                    </IndexLink>
                    <Link to="/formules" className="header_bottom_width" activeClassName="activeLink">
                        <div className="events">
                            <img src="images/Ticket-1.png" alt="ticket-img" />
                            <img className="ticket_image" src="images/Ticket.png" alt="ticket-img" />
                            <span>Formules voor de kust</span>
                        </div>
                    </Link>
                    <Link to="/faq" className="header_bottom_width" activeClassName = "activeLink">
                        <div className="events">
                            <img src="images/Tram-1.png" alt="tram-img" />
                            <img className="tram_image" src="images/Tram.png"  alt="tram-img" />
                            <span>Over de Kusttram</span>
                        </div>
                    </Link>
                </div>
            </div>  
        );
    } 
}

