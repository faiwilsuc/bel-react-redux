import React from 'react';
import MapContainer from './mapcontainer';
import { connect } from 'react-redux';
import * as townsActions from '../../actions/townsActions';
import * as eventsActions from '../../actions/eventsActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import filterEvents from './filter.js'

class Firstheader extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            zoom: 10,
        }
    }

    // Make town list UI friendly, add default option 'Kies een vertrekpunt'
    getTownsList () {
        let list = [
            { description: 'Kies een vertrekpunt' }
        ]
        return list.concat(this.props.towns);
    }

    // Handle change for town selection
    setTown = (e) => {
        let index = e.target.selectedIndex
        this.props.selectTown(this.getTownsList()[index]);
    }

    // Handle change for start date
    setStart = (date) => {
        this.props.selectTown({
            start_date: date
        });
    }

    // Handle change for end date
    setEnd = (date) => {
        this.props.selectTown({
            end_date: date
        });
    }

    // Filter town selection
    onFilterEvents = () => {

        const townpos = this.props.townpos

        if (!townpos.id) {

            alert("please select a town")

        } else if (!townpos.start_date || !townpos.end_date) { 

            alert("Please select both start date and end date")

        } else {

            if (new Date(townpos.start_date).getTime() >= new Date(townpos.end_date).getTime()) {
                alert("Please select the end date greater than start date")
            }

            if (townpos && townpos.id > 0
                && new Date(townpos.start_date).getTime() < new Date(townpos.end_date).getTime()
                && townpos.start_date !== undefined && townpos.end_date !== undefined) {

                    this.props.filter(filterEvents(townpos, this.props.events));
            }
        }
    }

    render() {
        return (
            <div className="map">
                <MapContainer events={this.props.filteredEvents || this.props.events} townpos={this.props.townpos} />
                <div className="container">
                    <div className="about_us">
                        <h5><span>Mijn lijn</span> laat me proeven van al het beste van de Kust</h5>
                        <label>Mijn vertrekpunt</label>
                        <select onChange={this.setTown}>
                            {
                                this.getTownsList().map((town, index) => {
                                    return (
                                        <option
                                            value={index}
                                            key={index}
                                            selected={this.props.townpos.id === index}>{town.description}</option>
                                    );
                                })
                            }
                        </select>
                        <label>ik ben aan de kust van</label>
                        <DatePicker id="start"
                            dateFormat="DD/MM/YYYY"
                            placeholderText="Start Date"
                            selected={this.props.townpos.start_date}
                            onChange={this.setStart}
                        />
                        <img src="images/aerrow.png" alt="arrow-img" />
                        <DatePicker id="end"
                            dateFormat="DD/MM/YYYY"
                            placeholderText="End Date"
                            selected={this.props.townpos.end_date}
                            onChange={this.setEnd}
                        />
                        <div className="clearfix">
                            <button onClick={this.onFilterEvents}>mijn persoonlijke tips</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events,
        filteredEvents: state.filteredEvents,
        towns: state.towns,
        townpos: state.townpos
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectTown: (townpos) => dispatch(townsActions.selectTown(townpos)),
        filter: (events) => dispatch(eventsActions.filterEvents(events)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Firstheader);