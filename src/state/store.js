import { createStore } from 'redux';
import basicReducer from './basic-reducer';

const store = createStore(basicReducer);

export default store;
