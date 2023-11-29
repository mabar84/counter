import React, {useEffect, useState} from 'react';
import {Button} from '../buttons/Button';
import {Wrapper} from '../wrappers/Wrapper';
import {ToSetValue} from '../to-set-value/ToSetValue';
import Screen from '../screen/Screen';

export const Counter3 = () => {

    const [state, setState] = useState(
        {
            minValue: 0,
            maxValue: 5,
            value: 0,
            errorLimit: false,
            errorMinMax: false,
            showText: false
        }
    )

    useEffect(() => {
        const minValue = localStorage.getItem('minValue3')
        const maxValue = localStorage.getItem('maxValue3')

        minValue && setState({...state, minValue: JSON.parse(minValue)})
        maxValue && setState({...state, maxValue: JSON.parse(maxValue)})
    }, [])

    useEffect(() => {
        setState({
            ...state,
            errorLimit: state.value >= state.maxValue,
            errorMinMax: state.minValue === state.maxValue
        })
    }, [state.value, state.minValue, state.maxValue])

    const increment = () => {
        state.value < state.maxValue && setState({...state, value: state.value + 1})
    }

    const reset = () => {
        setState({...state, value: state.minValue})
    }
    const saveSettings = () => {
        localStorage.setItem('minValue3', JSON.stringify(state.minValue))
        localStorage.setItem('maxValue3', JSON.stringify(state.maxValue))

        setState({...state, value: state.minValue})
    }

    const onClickSetPanelHandler = () => {
        setState({...state, value: state.minValue, showText: true})
    }
    const setMaxValue = (value: number) => {
        setState({...state, maxValue: value})
    }
    const setMinValue = (value: number) => {
        setState({...state, minValue: value})
    }

    return <div className={'counter3'}>
        <div onClick={onClickSetPanelHandler} className={`counter ${state.errorMinMax ? 'limit' : ''}`}>
            <ToSetValue minValue={state.minValue} maxValue={state.maxValue} title={'MaxValue'} value={state.maxValue}
                        setValue={setMaxValue}/>
            <ToSetValue minValue={state.minValue} maxValue={state.maxValue} title={'MinValue'} value={state.minValue}
                        setValue={setMinValue}/>
            <Wrapper>
                <Button disabled={state.errorMinMax} onClick={saveSettings} name={'set'}/>
            </Wrapper>
        </div>
        <div className={`counter ${state.errorLimit ? 'limit' : ''}`}>
            <Screen>
                {
                    state.showText ?
                        <p>
                            {state.errorMinMax
                                ? <span className={'error-text'}>
                                    Incorrect value!
                                </span>
                                : <span>
                                    Enter values and press 'set'
                                </span>
                            }
                        </p> :
                        <p className={'screen-text'}>
                            {state.value}
                        </p>
                }
            </Screen>
            <Wrapper>
                <Button disabled={state.errorLimit} onClick={increment} name={'inc'}/>
                <Button disabled={state.value === state.minValue} onClick={reset} name={'reset'}/>
            </Wrapper>
        </div>
    </div>
};

