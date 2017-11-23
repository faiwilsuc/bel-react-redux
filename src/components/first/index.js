import React from 'react';
import Navbar from '../shared/navbar';
import Firstheader from './firstheader';
import Firstcontent from './firstcontent';
import { connect } from 'react-redux';
import * as eventsActions from '../../actions/eventsActions';

class First extends React.Component {

    // No inital selection, display all events 
    componentWillReceiveProps (nextProps) {
        if (this.props.townpos.length === 0) {
            this.props.filter(this.props.events)
        }
    }

    render() {
        return (
            <div id="wrapper">
                <Navbar />
                <Firstheader />
                <Firstcontent />
            </div>
        );
    }
}

const mapStateToProps = (state) => {

  return {
    townpos: state.townpos,
    events: state.events,
    filteredEvents: state.filteredEvents
  }

};

const mapDispatchToProps = (dispatch) => {
 return {
     filter: (events) => dispatch(eventsActions.filterEvents(events)),
 }
};

export default connect(mapStateToProps, mapDispatchToProps)(First);