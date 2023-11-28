import React, {useEffect, useState} from 'react';
import {Button} from '../buttons/Button';
import {Wrapper} from '../wrappers/Wrapper';
import {ToSetValue} from '../to-set-value/ToSetValue';
import Screen from '../screen/Screen';

export const Counter3 = () => {

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

    }

    const onClickSetPanelHandler = () => {
        setShowText(true)
        setValue(minValue)
    }

    return <div className={'counter3'}>
        <div onClick={onClickSetPanelHandler} className={`counter ${errorMinMax ? 'limit' : ''}`}>
            <ToSetValue minValue={minValue} maxValue={maxValue} title={'MaxValue'} value={maxValue}
                        setValue={setMaxValue}/>
            <ToSetValue minValue={minValue} maxValue={maxValue} title={'MinValue'} value={minValue}
                        setValue={setMinValue}/>
            <Wrapper>
                <Button disabled={errorMinMax} onClick={saveSettings} name={'set'}/>
            </Wrapper>
        </div>
        <div className={`counter ${error ? 'limit' : ''}`}>
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
                <Button disabled={error} onClick={increment} name={'inc'}/>
                <Button disabled={value === minValue} onClick={reset} name={'reset'}/>
            </Wrapper>
        </div>
    </div>
};

