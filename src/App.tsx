import React from 'react';
import './App.css';
import {Counter1} from './components/counters/Counter1';
import {LocalStoragePractic} from './components/local-storage-practic/LocalStoragePractic';
import {Counter2} from './components/counters/Counter2';
import {Counter3} from './components/counters/Counter3';

const App = () => {


    return (
        <div className="App">
            <h2>Old test: Counter1</h2>
            <Counter1/>
            <br/>
            <hr/>
            <br/>
            <h2>New test: Counter2</h2>
            <Counter2/>
            <br/>
            <hr/>
            <br/>
            <h2>New test: Counter3</h2>
            <Counter3/>

            {/*<LocalStoragePractic/>*/}

        </div>
    );
};

export default App;
