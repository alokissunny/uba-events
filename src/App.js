import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';
import { Provider } from 'react-redux';
import DashBoard from './dashboard/Dashboard';
import {store} from './store/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <DashBoard/>
    </div>
    </Provider>
  );
}

export default App;
