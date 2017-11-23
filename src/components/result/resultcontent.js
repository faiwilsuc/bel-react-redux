import React from 'react';
import Line from './line';

export default class Resultcontent extends React.Component {
    render() {
        return (

            <div className="container">
                <Line origin={this.props.townpos} stops={this.props.planEvents.towardsKnokke} direction={'Knokke'} />
                <Line origin={this.props.townpos} stops={this.props.planEvents.towardsDePanne} direction={'De Panne'} />
                <div className="result_main_bottom clearfix">
                    <div className="result_main_bottom_left pull-left col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="result_main_bottom_left_img"><img src="images/result-btm-img.png" alt="img" /></div>
                        <div className="result_main_bottom_right">
                            <h2>Dienstregeling</h2>
                            <p>Tijdens de zomer is er een tram elke 10 minuten</p>
                        </div>
                    </div>
                    <div className="result_main_bottom_left pull-right col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{ borderLeft: 'solid 1px #ffffff' }}>
                        <div className="result_main_bottom_left_img"><img src="images/logo.png" width="47" height="41" alt="logo" /></div>
                        <div className="result_main_bottom_right">
                            <h2>Dichtstbijzijnde Lijnwinkel</h2>
                            <p>Lijnwinkel Oostende (nabij NMBS-station) <br /> br /andariskaai 2 · 8400 Ostende </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}