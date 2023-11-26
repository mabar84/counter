import React, {useEffect} from 'react';
import './App.css';
import {Counter1} from './components/counters/Counter1';
import {LocalStoragePractic} from './components/local-storage-practic/LocalStoragePractic';
import {Counter2} from './components/counters/Counter2';

const App = () => {


    return (
        <div className="App">

            <h3></h3>

            <Counter1/>
            <br/>
            <Counter2/>
            {/*<LocalStoragePractic/>*/}

        </div>
    );
};

export default App;
