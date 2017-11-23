import React from 'react';
import { Stop } from './stop'
import { Link } from 'react-router';

export const Result = (props) => {
    const { timing, origin, stop } = props

    if (stop.events) {
        return (
            <div>
                <Stop name={stop.name} label={stop.label} type={'event'}/>
                {stop.events.map((event, index) => {
                    return (
                        <div className="post_wrapper" key={index}>
                            
                                <div className="attraction_post" key={event.id}>
                                    <div className="attraction_post_left col-md-8 col-sm-8  col-xs-12" >
                                        <div className="post_content">

                                            {event.point_type === 1 && 
                                                <h6 className="event_title">ATTRACTIE
                                                    <strong className="event_partner"> · KUSTRAMPLUS</strong>
                                                </h6>
                                                }

                                            {event.point_type === 2 && 
                                                <h6 className="event_title">EVENEMENT</h6>
                                                }
                                            
                                            {event.point_type === 3 &&
                                                <h6 className="event_title">ATTRACTIE</h6>
                                            }

                                            <span className="post_head" key={event.id}>{event.name}</span>

                                            <div className="location">
                                                <img src="images/socket.png" alt="socket-img" />
                                                <span className="location_info" key={event.id}><strong>Halte:</strong>
                                                {stop.name} · {timing} min vanaf {origin.description} </span>
                                            </div>

                                            <p className="culture">{event.description}</p>

                                            <div className="social_media" >
                                                <a href={event.facebook_link || "http://facebook.com"} ><img src="images/facebook.png" alt="facebook-icon" /><span>Facebook</span></a>
                                                <a href={event.url} ><img src="images/web.png" alt="web-icon" /><span>website</span></a>
                                            </div>
                                        </div>
                                    </div>

                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="post_image">
                                        <img src={`${event.image_url}`} alt="post-img" />
                                    </div>
                                </div>

                                <div className="adviseerds_block clearfix" style={{float:'left',marginTop:'30px'}}>
                                    <h5>adviseerde ticket <span>De dagpas</span></h5>
                                    <div className="adviseerds_block_info">
                                        <Link to="/formules">
                                            <img src="images/attraction-img.png" width="25" height="21" alt="adviserde-img" />
                                            <strong>Vanaf <b>€ 6,00</b> / Persoon</strong>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        )       
    }

    return (
        <div className="stop_point_wrapper">
            <Stop name={stop.name} label={stop.label} type={'noevent'}/>
        </div>   
    )
    

}