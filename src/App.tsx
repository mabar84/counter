import React from 'react';
import './App.css';
import {Counters} from './components/counters/Counters';
import {LocalStoragePractic} from './components/local-storage-practic/LocalStoragePractic';

const App = () => {


    return (
        <div className="App">

            <h3></h3>

            <Counters/>
            <LocalStoragePractic/>

        </div>
    );
};

export default App;
