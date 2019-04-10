import {createStore} from 'redux';
import card from './redusers/add-card';
// import reducer from './redusers';

const store = createStore(card, window.__REDUX_DEVTOOLS_EXTENSION__&&
    window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

