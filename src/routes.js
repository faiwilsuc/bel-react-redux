import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import First from './components/first';
import Faq from './components/faq';
import Formules from './components/formules';
import Kustt from './components/kustt';
import Onni from './components/onni';
import Waartekoop from './components/waartekoop';
import Result from './components/result';

export default  (

 <Route path="/" component={App}>
    <IndexRoute component={First}/>
    <Route path="/faq" component={Faq}/>
    <Route path="/formules" component={Formules}/>
    <Route path="/kusttram_plus" component={Kustt}/>
    <Route path="/onni" component={Onni}/>
    <Route path="/waartekoop" component={Waartekoop}/>
    <Route path="/result-page" component={Result}/>
 </Route>
 
);