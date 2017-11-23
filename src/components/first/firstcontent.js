import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as eventsActions from '../../actions/eventsActions';
import * as planActions from '../../actions/planActions';
import SidebaritemText from '../shared/sidebaritemimage'

class Firstcontent extends React.Component {

    constructor() {
        super();

        this.state = {
            limitNum: 10,
            isCheckedKids: false,
            isCheckedIndoor: false,
            isChecked: [],
            selectedEvents: []
        }

        this.onClickPlanRoute = this.onClickPlanRoute.bind(this)

    }

    onSelectEvent = (e, index) => {

        let newState = this.state

        // Handle checkbox toggle
        newState.isChecked[index] = !this.state.isChecked[index];
        
        // Add event to selected events list
        // if not already in list (check), else remove (uncheck)
        if (this.state.selectedEvents.indexOf(parseInt(e.target.id, 10)) === -1) {
            newState.selectedEvents.push(parseInt(e.target.id, 10))
        } else {
            newState.selectedEvents.splice(e.target.selectedIndex, 1)
        }

        this.setState({newState});

    }

    onClickKids = (e) => {
        this.setState({ isCheckedKids: e.target.checked });
    }

    onClickIndoor = (e) => {
        this.setState({ isCheckedIndoor: e.target.checked });
    }
    
    onClickPlanRoute = (e) => {
        if (!this.props.townpos.id) {
            alert('Gelieve een vertrekpunt te selecteer')
        } else if (!this.state.selectedEvents.length) {
            alert('Gelieve minsten een event te selecteer')
        } else {
            let events = []
            
            this.state.selectedEvents.map(item => {
                this.props.events.map( event => {
                    if (event.id === item) {
                        events.push(event)
                    }
                })
            })
            this.props.planRoute(events, this.props.townpos, this.props.stops)
        }
    }

    showMore = () => {
        this.setState({ limitNum: this.state.limitNum + 10,});
    }

    componentWillMount () {
        this.props.resetRoute()
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            isChecked: [],
            selectedEvents: []
        })
    }

    render() {
        return (
            <div className="mian_content">
                <div className="container">
                    <div className="attraction_width">
                        <div className="attraction clearfix">
                            <div className="attraction-left  col-sm-4 col-md-4 col-xs-12 left_width">
                                <div className="left_content_width">
                                    <div className="left_content">

                                        <div className="all_location_detail">
                                            <div className="my_location_detail">
                                                <img src="images/location.png" alt="location-img" />
                                                <div className="my_location_info">
                                                    <strong>Mijn vertrekpunt</strong>
                                                    <p>{this.props.townpos.description}</p>
                                                </div>
                                            </div>
                                            <div className="my_location_detail">
                                                <img src="images/socket.png" alt="socket-img" />
                                                <div className="my_location_info">
                                                    <strong>Mijn halte</strong>
                                                    <p>{this.props.townpos.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="filters">
                                        <h3>Filters</h3>
                                        <div className="filters-kids">
                                            <input name="gender1" type="checkbox" id="inlineCheckbox_kids" onClick={this.onClickKids} />
                                            {this.state.isCheckedKids &&
                                                <label className="checked" htmlFor="inlineCheckbox_kids">Leuk met kids</label>
                                            }
                                            {!this.state.isCheckedKids &&
                                                <label htmlFor="inlineCheckbox_kids">Leuk met kids</label>
                                            }
                                            <div className="clear"></div>
                                        </div>
                                        <div className="filters-indoor">
                                            <input name="gender2" type="checkbox" id="inlineCheckbox_indoor" onClick={this.onClickIndoor} />
                                            {this.state.isCheckedIndoor &&
                                                <label className="checked" htmlFor="inlineCheckbox_indoor">Indoor activiteiten</label>
                                            }
                                            {!this.state.isCheckedIndoor &&
                                                <label htmlFor="inlineCheckbox_indoor">Indoor activiteiten</label>
                                            }
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                    <SidebaritemText title="Doe niet als Onni" imagePath="images/image.png" imageAlt="panda" text="Geniet van de kust, maar heb ook aandacht voor de Kusttram!" linkText="lees meer" linkUrl="/onni" />
                                    <div className="coupan_code">
                                        <div className="coupan_img"><img src="images/coupan.png" alt="coupan-img" /></div>
                                        <p>Gemakkelijk reizen met een</p>
                                        <span>dagpas</span>
                                        <div className="know_more"><a href="https://www.delijn.be/nl/vervoerbewijzen/ritkaarten-dagpassen/dagpas.html" target="_blank" rel="noopener noreferrer">lees meer</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="attraction-right  col-sm-8 col-md-8 col-xs-12">
                                <div className="all_attraction clearfix">
                                    <h4>Jouw events en attracties in de buurt</h4>
                                    <div className="attraction_border">&nbsp;</div>

                                    {this.props.events && this.props.events.slice(0, this.state.limitNum).map((event, index) => {

                                            if (this.state.isCheckedKids && event.child_friendly === false) {
                                                return null
                                            }
       
                                            if (this.state.isCheckedIndoor && event.location_type === 2) {
                                                return null
                                            }

                                            return (
                                                <div key={index}>
                                                    <div className="attraction_post">
                                                        <div className="attraction_post_left col-md-8 col-sm-8  col-xs-12" >
                                                            <div className="post_content">
                                                                    {event.point_type === 1 && 
                                                                    <h6 className="event_title">ATTRACTIE
                                                                        <strong className="event_partner"> · KUSTRAMPLUS</strong>
                                                                    </h6>}
                                                                    {event.point_type === 2 && 
                                                                    <h6 className="event_title">EVENEMENT</h6>}
                                                                    {event.point_type === 3 && 
                                                                    <h6 className="event_title">ATTRACTIE</h6>}
                                                                <div>
                                                                <input name="gender" type="checkbox" className="events_check"
                                                                    id={event.id} key={index}
                                                                    onClick={(e) => this.onSelectEvent(e, index)}
                                                                />
                                                                <label className={this.state.isChecked[index] ? 'checked' : ''} htmlFor={event.id}></label>
                                                                <div className="clear"></div>
                                                                </div>
                                                                <span className="post_head" key={event.id}>{event.name}</span>
                                                                <div className="location">
                                                                    <img src="images/socket.png" alt="socket-img" />
                                                                    <span className="location_info" key={event.id}>
                                                                        <strong> Halte:</strong> {event.stops[0].name} 
                                                                        {event.distance && <span> · {event.distance} km vanaf {this.props.townpos.name}</span>}
                                                                    </span>
                                                                </div>
                                                                <p className="culture">{event.description}</p>
                                                                <div className="social_media" >
                                                                    <a href={event.facebook_link || "http://facebook.com"} target="_blank" rel="noopener noreferrer"><img src="images/facebook.png" alt="facebook-icon" /><span>Facebook</span></a>
                                                                    <a href={`${event.url}`} ><img src="images/web.png" alt="web-icon" /><span>website</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-sm-4 col-xs-12">
                                                            <div className="post_image">
                                                                <img src={`${event.image_url}`} alt="post-img" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                    <div className="more_about">
                                        {this.state.limitNum < this.props.events.length && 
                                            <button onClick={this.showMore} >MEER EVENTS</button>                                    
                                        }
                                        
                                        {this.state.isChecked.filter(checkItem => checkItem === true).length !== 0
                                        && this.props.townpos.id !== undefined
                                        && this.props.townpos.start_date !== undefined
                                        && this.props.townpos.end_date !== undefined
                                        &&
                                            <Link to="/result-page">
                                                <button className="btnClass" style={{ background: '#9b9696' }} onClick={this.onClickPlanRoute}>
                                                    Plan je route
                                                </button>
                                            </Link>
                                        }

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

const mapStateToProps = (state) => {
    return {
        townpos: state.townpos,
        events: state.filteredEvents,
        stops: state.stops,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        resetRoute: () => dispatch(planActions.reset()),
        planRoute: (events, townpos, stops) => dispatch(planActions.planRoute(events, townpos, stops)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Firstcontent);