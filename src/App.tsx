import React from 'react';
import './App.css';
import {Counter1} from './components/counters/Counter1';
import {Counter2} from './components/counters/Counter2';
import {Counter3} from './components/counters/Counter3';
import {Counter4} from './components/counters/Counter4-redux';
import {Counter5} from './components/counters/Counter5-redux';

const App = () => {

    return (
        <div className="App">
            <Counter1/>
            <Counter2/>
            <Counter3/>
            <Counter4/>
            <Counter5/>
            {/*<LocalStoragePractic/>*/}
        </div>
    );
};

export default App;
