import React from 'react';
import * as _ from 'lodash'
import { Result } from './result';

export default class Line extends React.Component {

    getTiming (start, end) {
        // compute timing by using time to next
        return 5
    }

    getWalkingDistance (distance) {
        // walking distance: ditance in KM * 5km/h ==> return minutes
        return 5
    }

    render() {
        let walk = this.getWalkingDistance(this.props.origin.distance)

        if (this.props.stops.length === 0) {
            return (
                <div className="stop_line">
                    <div className="result_main_left pull-left col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="mian_content">
                            <div className="container">
                                <div className="attraction_width_left">
                                    <div className="attraction clearfix">
                                        <div className="attraction-left  col-sm-6 col-md-6 col-xs-12">
                                            <div className="result_left_attraction clearfix">
                                                <h2>Je attractie op de lijn <br /> <b>richting {this.props.direction}</b></h2>
                                                <div className="attraction_border">
                                                    <p className="stop_line no_result" >Geen evenement richting {this.props.direction}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="stop_line">
                <div className="result_main_left pull-left col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="mian_content">
                        <div className="container">
                            <div className="attraction_width_left">
                                <div className="attraction clearfix">

                                    <div className="attraction-left  col-sm-6 col-md-6 col-xs-12">
                                        <div className="result_left_attraction clearfix">
                                            <h2>Je attractie op de lijn <br /> <b>richting {this.props.direction}</b></h2>
                                            <div className="start_point">
                                                {this.props.origin.name} vertrek punt richting <span className="line_direction">{this.props.direction}</span>
                                            </div>
                                            {/*<div>{walk} min te voet vanaf {this.props.origin.name}</div>*/}
                                            {this.props.stops.map((stop, index) => {
                                                    
                                                    let timing = this.getTiming(this.props.origin, stop)
                                                    
                                                    return (
                                                        <div>
                                                            <Result
                                                            key={index}
                                                            origin={this.props.origin}
                                                            timing={timing}
                                                            stop={stop} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
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