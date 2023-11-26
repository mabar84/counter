import React, {useEffect, useState} from 'react';
import {Button} from '../buttons/Button';
import {Wrapper} from '../wrappers/Wrapper';
import {Input} from '../inputs/Input';
import {ToSetValue} from '../to-set-value/ToSetValue';

export const Counter2 = () => {

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [value, setValue] = useState(minValue)

    const [hideSet, setHideSet] = useState(true)


    useEffect(() => {
        const minValue = localStorage.getItem('minValue')
        const maxValue = localStorage.getItem('maxValue')

        minValue && setMinValue(JSON.parse(minValue))
        maxValue && setMaxValue(JSON.parse(maxValue))
        minValue && setValue(JSON.parse(minValue))

    }, [])

    const increment = () => {
        value < maxValue && setValue((value) => value + 1)
    }

    const reset = () => {
        setValue(minValue)
    }
    const switchSettings = () => {
        setHideSet(!hideSet)
    }
    const saveSettings = () => {
        setHideSet(!hideSet)
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))

        setValue(minValue)

    }

    return (
        hideSet ?
            <div className={`counter ${minValue === maxValue ? 'limit' : ''}`}>
                <div className={'value'}>
                    {value}
                </div>
                <Wrapper>
                    <Button disabled={!(value < maxValue)} onClick={increment} name={'inc'}/>
                    <Button disabled={value === minValue} onClick={reset} name={'reset'}/>
                    <Button disabled={false} onClick={switchSettings} name={'set'}/>
                </Wrapper>
            </div>
            : <div className={'counter'}>
                <ToSetValue title={'MaxValue'} value={maxValue} setValue={setMaxValue}/>
                <ToSetValue title={'MinValue'} value={minValue} setValue={setMinValue}/>
                <Wrapper>
                    <Button disabled={false} onClick={saveSettings} name={'set'}/>
                </Wrapper>
            </div>
    );
};

