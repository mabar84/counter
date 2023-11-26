import React, {useEffect, useState} from 'react';

export const LocalStoragePractic = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        getFromLSHandler()
    }, [])

    useEffect(() => {
        setToLSHandler()
    }, [value])


    const incHandler = () => {
        setValue(prev => prev + 1)
    }
    const setToLSHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }
    const getFromLSHandler = () => {
        let newValue = localStorage.getItem('counterValue')
        newValue && setValue(JSON.parse(newValue))
    }

    const clearLSHandler = () => {
        localStorage.clear()
        setValue(0)
    }
    const removeItemLSHandler = () => {
        localStorage.removeItem('counterValue')
    }

    return (
        <div>
            <h3 style={{textAlign: 'center'}}>
                LocalStorage
                <br/>
                {value}
                <br/>
                <button onClick={incHandler}>inc</button>
                <button onClick={setToLSHandler}>setToLS</button>
                <button onClick={getFromLSHandler}>getFromLS</button>
                <button onClick={clearLSHandler}>clearLS</button>
                <button onClick={removeItemLSHandler}>removeItemLS</button>
            </h3>
        </div>
    );
};

