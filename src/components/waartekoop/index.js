import React from 'react';

import Navbar from '../shared/navbar';
import Waartecontent from './waartecontent';
import Waarteheader from './waarteheader';

import { connect } from 'react-redux';

 class Waartekoop extends React.Component {

    render() {
        return (
            <div id="wrapper">
             <Navbar />
             <Waarteheader />
             <Waartecontent stores={this.props.stores}/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return{
       stores: state.stores
    };
};
const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Waartekoop);