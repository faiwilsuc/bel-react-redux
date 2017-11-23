import React from 'react';


export default class Externe extends React.Component {

    constructor() {
        super();
        this.state = {
            title_thur: false,
            title: false,
            daily_thur: [],
            daily: []
        }
    }

    componentWillReceiveProps(nextProps) {

        let daily_thur = [];
        let daily = [];

        nextProps.stores.map((store) => {

            if (store.name === 'Oostende Northlaan') {
                daily_thur.push(store.schedule[0].opens_at, store.schedule[0].closes_at, store.schedule[3].opens_at, store.schedule[3].closes_at)
                this.setState({ daily_thur })
            }
            if (store.name === 'Middelkerke Casino' || store.name === 'Oostende marie-Joséplein' || store.name === 'Oostende Station' || store.name === 'Blankenberge Station') {
                daily.push(store.schedule[0].opens_at, store.schedule[0].closes_at)
                this.setState({ daily })
            }
        })

        if (nextProps.title === 'Oostende Northlaan') {
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
        // function createMarkup(content) {
        //     return {__html: content};
        // }
        let className = this.props.pullRight ? "lijnwinkel_item col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right" : "lijnwinkel_item col-lg-6 col-md-6 col-sm-12 col-xs-12";
        return (

            <div className={className}>
                <h4>{this.props.title}</h4>

                <h6 className="title_thur">
                    {this.state.title_thur &&
                        <div>
                            <span>dagelijks</span>&nbsp;<span>{this.state.daily_thur[1]}</span><br />
                            <span>donderdag</span>&nbsp;<span>{this.state.daily_thur[3]}</span>
                        </div>
                    }
                </h6>
                <h6 className="title">
                    {this.state.title &&
                        <div>
                            <span>dagelijks</span>&nbsp;<span>{this.state.daily[1]}</span>
                        </div>
                    }
                </h6>
            </div>

        );
    }
}