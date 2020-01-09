import React from 'react';
import store from '../../state/store';
import { Provider } from 'react-redux';
import Basic from '../Basic';

const App = () => (
  <Provider store={store}>
    <Basic />
  </Provider>
);

export default App;
