import React, {useEffect, useState} from 'react';
import {Button} from '../buttons/Button';
import {Wrapper} from '../wrappers/Wrapper';
import {ToSetValue} from '../to-set-value/ToSetValue';
import Screen from '../screen/Screen';

export const Counter5 = () => {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [value, setValue] = useState(minValue)
    const [error, setError] = useState(false)
    const [errorMinMax, setErrorMinMax] = useState(false)
    const [showText, setShowText] = useState(false)

    useEffect(() => {
        const minValue = localStorage.getItem('minValue3')
        const maxValue = localStorage.getItem('maxValue3')

        minValue && setMinValue(JSON.parse(minValue))
        maxValue && setMaxValue(JSON.parse(maxValue))
        minValue && setValue(JSON.parse(minValue))
    }, [])
    useEffect(() => {
        setError(value >= maxValue)
        setErrorMinMax(minValue === maxValue)
    }, [value, minValue, maxValue])

    const increment = () => {
        value < maxValue && setValue((value) => value + 1)
    }
    const reset = () => {
        setValue(minValue)
    }
    const saveSettings = () => {
        localStorage.setItem('minValue3', JSON.stringify(minValue))
        localStorage.setItem('maxValue3', JSON.stringify(maxValue))
        setValue(minValue)
        setShowText(false)
    }
    const setMaxValueHandler = (value: number) => {
        setMaxValue(value)
        setShowText(true)
        setError(false)
        setValue(0)
    }
    const setMinValueHandler = (value: number) => {
        setMinValue(value)
        setShowText(true)
        setError(false)
        setValue(0)
    }
    return <>
        <h2>Wednesday: Counter5</h2>
        <div className={'counter3'}>
            <div className={`counter ${errorMinMax ? 'limit' : ''}`}>
                <ToSetValue
                    minValue={minValue} maxValue={maxValue} value={maxValue}
                    title={'MaxValue'} setValue={setMaxValueHandler}/>
                <ToSetValue
                    minValue={minValue} maxValue={maxValue} value={minValue}
                    title={'MinValue'} setValue={setMinValueHandler}/>
                <Wrapper>
                    <Button disabled={errorMinMax || !showText}
                            onClick={saveSettings} name={'set'}/>
                </Wrapper>
            </div>
            <div className={`counter ${error || errorMinMax ? 'limit' : ''}`}>
                <Screen>
                    {
                        showText ?
                            <p>
                                {errorMinMax
                                    ? <span className={'error-text'}>
                                    Incorrect value!
                                </span>
                                    : <span>
                                    Enter values and press 'set'
                                </span>
                                }
                            </p> :
                            <p className={'screen-text'}>
                                {value}
                            </p>
                    }
                </Screen>
                <Wrapper>
                    <Button disabled={error || showText} onClick={increment} name={'inc'}/>
                    <Button disabled={value === minValue || showText}
                            onClick={reset} name={'reset'}/>
                </Wrapper>
            </div>
        </div>
    </>
};

