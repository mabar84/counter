import React, {useEffect} from 'react';
import {Button} from '../buttons/Button';
import {Wrapper} from '../wrappers/Wrapper';
import {ToSetValue} from '../to-set-value/ToSetValue';
import Screen from '../screen/Screen';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {
    setError5AC,
    setErrorMinMax5AC,
    setMaxValue5AC,
    setMinValue5AC,
    setShowTextAC,
    setValue5AC
} from '../../state/couner5-reducer';

export const Counter5 = () => {


    const dispatch = useDispatch()

    let minValue = useSelector<AppRootStateType, number>(state => state.counter5.minValue)
    let maxValue = useSelector<AppRootStateType, number>(state => state.counter5.maxValue)
    let value = useSelector<AppRootStateType, number>(state => state.counter5.value)
    let error = useSelector<AppRootStateType, boolean>(state => state.counter5.error)
    let errorMinMax = useSelector<AppRootStateType, boolean>(state => state.counter5.errorMinMax)
    let showText = useSelector<AppRootStateType, boolean>(state => state.counter5.showText)

    useEffect(() => {
        dispatch(setValue5AC(minValue))
        const minValueLS = localStorage.getItem('minValue5')
        const maxValueLS = localStorage.getItem('maxValue5')
        minValueLS && dispatch(setMinValue5AC(JSON.parse(minValueLS)))
        maxValueLS && dispatch(setMaxValue5AC(JSON.parse(maxValueLS)))
        minValueLS && dispatch(setValue5AC(JSON.parse(minValueLS)))
    }, [])
    useEffect(() => {
        dispatch(setError5AC(value >= maxValue))
        dispatch(setErrorMinMax5AC(minValue === maxValue))
    }, [value, minValue, maxValue])

    const increment = () => {
        value < maxValue && dispatch(setValue5AC(value + 1))
    }
    const reset = () => dispatch(setValue5AC(minValue))

    const saveSettings = () => {
        dispatch(setShowTextAC(false))
        dispatch(setValue5AC(minValue))
        localStorage.setItem('minValue5', JSON.stringify(minValue))
        localStorage.setItem('maxValue5', JSON.stringify(maxValue))
    }
    const setMaxValueHandler = (value: number) => {
        dispatch(setMaxValue5AC(value))
        dispatch(setShowTextAC(true))
        dispatch(setError5AC(false))
        dispatch(setValue5AC(0))
    }
    const setMinValueHandler = (value: number) => {
        dispatch(setMinValue5AC(value))
        dispatch(setShowTextAC(true))
        dispatch(setError5AC(false))
        dispatch(setValue5AC(0))
    }
    return <>
        <h2>Wednesday: Counter5-redux</h2>
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

