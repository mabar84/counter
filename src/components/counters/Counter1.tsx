import React, {useEffect, useState} from 'react';
import {Button} from '../buttons/Button';
import {Wrapper} from '../wrappers/Wrapper';
import Screen from '../screen/Screen';

export const Counter1 = () => {

    const [minValue, maxValue] = [0, 5]
    const [value, setValue] = useState(minValue)
    const [error, setError] = useState(false)

    const increment = () => {
        value < maxValue && setValue((value) => value + 1)
    }
    const reset = () => {
        setValue(minValue)
    }

    useEffect(() => {
        setError(value >= maxValue)
    }, [value])


    return (
        <div className={`counter ${error ? 'limit' : ''}`}>
            <Screen>
                <p className={'screen-text'}>
                    {value}
                </p>
            </Screen>

            <Wrapper>
                <Button disabled={error} onClick={increment} name={'inc'}/>
                <Button disabled={value === minValue} onClick={reset} name={'reset'}/>
            </Wrapper>
        </div>
    );
};

