import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
// import ErrorBoundry from './components/error-boundry';
// import CardService from './services';
// import {CardProvider} from './components/context';

import store from './store';

import "./index.css";
import ErrorBoundry from "./components/error-boundry";

// const cardService = new CardService();

// ReactDOM.render(
//     <Provider store={store}>
//         <ErrorBoundry>
//             <CardProvider value={cardService}>
//                 <Router>
//                     <App/>
//                 </Router>
//             </CardProvider>
//         </ErrorBoundry>
//     </Provider>,
//     document.getElementById('root')
// );


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Router>
                <App/>
            </Router>
        </ErrorBoundry>
    </Provider>
    , document.getElementById("root"));