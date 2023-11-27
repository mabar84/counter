import React from 'react';
import './App.css';
import {Counter1} from './components/counters/Counter1';
import {LocalStoragePractic} from './components/local-storage-practic/LocalStoragePractic';
import {Counter2} from './components/counters/Counter2';

const App = () => {


    return (
        <div className="App">
            <h2>Old test work</h2>

            <Counter1/>
            <br/>
            <hr/>
            <br/>
            <h2>New test work with useState()</h2>
            <Counter2/>
            <br/>
            <hr/>
            <br/>
            <h2>New test work with useReducer()</h2>

            {/*<LocalStoragePractic/>*/}

        </div>
    );
};

export default App;
