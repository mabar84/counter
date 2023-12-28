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
            <h2>Old test: Counter1</h2>
            <Counter1/>
            <br/>
            <hr/>
            <br/>
            <h2>Tuesday: Counter2</h2>
            <Counter2/>
            <br/>
            <hr/>
            <br/>
            <h2>Tuesday: Counter3</h2>
            <Counter3/>
            <br/>
            <hr/>
            <br/>
            <h2>Wednesday: Counter4</h2>
            <Counter4/>
            <br/>
            <hr/>
            <br/>
            <h2>Wednesday: Counter5</h2>
            <Counter5/>

            {/*<LocalStoragePractic/>*/}

        </div>
    );
};

export default App;
