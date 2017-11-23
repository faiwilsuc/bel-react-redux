import React from 'react';
import Sidebar from '../shared/sidebar';
import Lijnwinkels from './lijnwinkels';
import verkoopautomaten from './verkoopautomaten';
import Externe from './externe';

export default class Waartecontent extends React.Component {

    render() {

        return (
            <div className="container">
                <Sidebar />
                <div className="right-content pull-right col-lg-8 col-md-8 col-sm-8 col-xs-12">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="right_content" style={{ marginLeft: '0', marginTop: '0' }}>
                            <h1>Waar te koop?</h1>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="right_content_lijnwinkels">
                            <h3>lijnwinkels</h3>
                        </div>

                        {this.props.stores.map((store, index) => {
                            if (store.name === 'Koksijde Sint-Idesbald') {

                                return <Lijnwinkels key={index}  title={store.name} 
                                    opens_at={store.schedule[0].opens_at} closes_at={store.schedule[0].closes_at}
                                    opens_at_sat={store.schedule[6].opens_at} closes_at_sat={store.schedule[6].closes_at} pullRight={index % 2} />
                            }
                            else if (store.name === 'Middelkerke Verhaeghelaan' || store.name === 'Oostende Northlaan') {

                                return <Lijnwinkels key={index}  title={store.name}  opens_at={store.schedule[0].opens_at} closes_at={store.schedule[0].closes_at}
                                    opens_at_thur={store.schedule[3].opens_at} closes_at_thur={store.schedule[3].closes_at} pullRight={index % 2} />
                            }
                            else {

                                return <Lijnwinkels key={index}  title={store.name}  opens_at={store.schedule[0].opens_at} closes_at={store.schedule[0].closes_at} pullRight={index % 2} />
                            }
                        })
                        }

                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="right_content_lijnwinkels">
                            <h3>Verkoopautomaten aan de kust</h3>
                        </div>
                        {verkoopautomaten.map((verkoopautomaat, index) => {
                            return <Externe key={index} title={verkoopautomaat.title}  pullRight={index % 2} stores={this.props.stores} />
                        })}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="right_content_lijnwinkels">
                            <h3>Externe verkooppunten aan de kust</h3>
                        </div>
                        <p>Zoek hier een <a href="https://www.delijn.be/nl/vervoerbewijzen/verkooppunten/voorverkooppunt-in-uw-buurt.html">verkooppunt bij jou in de buurt</a></p>
                    </div>
                </div>
            </div>
        );
    }
}