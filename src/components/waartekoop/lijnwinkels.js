import React from 'react';


export default class Lijnwinkels extends React.Component {

    constructor() {
        super();
        this.state = {
            title_sat: false,
            title_thur: false,
            title: false
        }
    }

    componentDidMount() {
        if (this.props.title === 'Koksijde Sint-Idesbald') {
            this.setState({
                title_sat: true
            })
        }
        else if (this.props.title === 'Middelkerke Verhaeghelaan' || this.props.title === 'Oostende Northlaan') {
            this.setState({
                title_thur: true
            })
        }
        else {
            this.setState({
                title: true
            })
        }

    }

    render() {

        let className = this.props.pullRight ? "lijnwinkel_item col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right" : "lijnwinkel_item col-lg-6 col-md-6 col-sm-12 col-xs-12";
        return (

            <div className={className}>
                <h4>{this.props.title}</h4>

                <h6 className="title_sat">
                    {this.state.title_sat &&
                        <div>
                            <span>dagelijks</span>&nbsp;<span>{this.props.opens_at} - {this.props.closes_at}</span><br />
                            <span>zaterdag</span>&nbsp;<span>{this.props.opens_at_sat} - {this.props.closes_at_sat}</span>
                        </div>
                    }
                </h6>
                <h6 className="title_thur">
                    {this.state.title_thur &&
                        <div>
                            <span>dagelijks</span>&nbsp;<span>{this.props.opens_at} - {this.props.closes_at}</span><br />
                            <span>donderdag</span>&nbsp;<span>{this.props.opens_at_thur} - {this.props.closes_at_thur}</span>
                        </div>
                    }
                </h6>
                <h6 className="title">
                    {this.state.title &&
                        <div>
                            <span>dagelijks</span>&nbsp;<span>{this.props.opens_at} - {this.props.closes_at}</span>
                        </div>
                    }
                </h6>
            </div>

        );
    }
}
