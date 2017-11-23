import React from 'react';

import Navbar from '../shared/navbar';
import Resultcontent from './resultcontent';
import MapContainer from './mapcontainer';
import { connect } from 'react-redux';

 class Result extends React.Component {

    render() {
        return (
            <div id="wrapper">
             <Navbar />
             <div className="map">
                <MapContainer stops={this.props.planEvents} events={this.props.filteredEvents || this.props.events} townpos={this.props.townpos} />
            </div>
             <Resultcontent planEvents={this.props.planEvents} townpos={this.props.townpos} />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return{
        events: state.events,
        filteredEvents: state.filteredEvents,
        planEvents: state.planEvents,
        townpos: state.townpos
    };
};

export default connect(mapStateToProps)(Result);