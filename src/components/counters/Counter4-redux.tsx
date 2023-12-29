import React, {useEffect} from 'react';
import {Button} from '../buttons/Button';
import {Wrapper} from '../wrappers/Wrapper';
import {ToSetValue} from '../to-set-value/ToSetValue';
import Screen from '../screen/Screen';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {
    setErrorAC,
    setErrorMinMaxAC,
    setHideSetAC,
    setMaxValueAC,
    setMinValueAC,
    setValueAC
} from '../../state/couner4-reducer';

export const Counter4 = () => {

    const dispatch = useDispatch()

    let minValue = useSelector<AppRootStateType, number>(state => state.counter4.minValue)
    let maxValue = useSelector<AppRootStateType, number>(state => state.counter4.maxValue)
    let value = useSelector<AppRootStateType, number>(state => state.counter4.value)
    let error = useSelector<AppRootStateType, boolean>(state => state.counter4.error)
    let errorMinMax = useSelector<AppRootStateType, boolean>(state => state.counter4.errorMinMax)
    let hideSet = useSelector<AppRootStateType, boolean>(state => state.counter4.hideSet)

    useEffect(() => {
        dispatch(setValueAC(minValue))
        const minValueLS = localStorage.getItem('minValue')
        const maxValueLS = localStorage.getItem('maxValue')
        minValueLS && dispatch(setMinValueAC(JSON.parse(minValueLS)))
        maxValueLS && dispatch(setMaxValueAC(JSON.parse(maxValueLS)))
        minValueLS && dispatch(setValueAC(JSON.parse(minValueLS)))
    }, [])

    useEffect(() => {
        dispatch(setErrorAC(value >= maxValue))
        dispatch(setErrorMinMaxAC(minValue === maxValue))
    }, [value, minValue, maxValue])

    const increment = () => {
        value < maxValue && dispatch(setValueAC(value + 1))
    }

    const reset = () => dispatch(setValueAC(minValue))

    const switchSettings = () => {
        dispatch(setHideSetAC(!hideSet))
        dispatch(setValueAC(minValue))
    }
    const saveSettings = () => {
        dispatch(setHideSetAC(!hideSet))
        dispatch(setValueAC(minValue))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    return <>
        <h2>Wednesday: Counter4-redux</h2>
        {hideSet ?
            <div className={`counter ${error ? 'limit' : ''}`}>
                <Screen>
                    <p className={'screen-text'}>
                        {value}
                    </p>
                </Screen>
                <Wrapper>
                    <Button disabled={error} onClick={increment} name={'inc'}/>
                    <Button disabled={value === minValue} onClick={reset} name={'reset'}/>
                    <Button disabled={false} onClick={switchSettings} name={'set'}/>
                </Wrapper>
            </div>
            : <div className={`counter ${errorMinMax ? 'limit' : ''}`}>
                <ToSetValue minValue={minValue} maxValue={maxValue} title={'MaxValue'} value={maxValue}/>
                <ToSetValue minValue={minValue} maxValue={maxValue} title={'MinValue'} value={minValue}/>
                <Wrapper>
                    <Button disabled={errorMinMax} onClick={saveSettings} name={'set'}/>
                </Wrapper>
            </div>
        }
        <br/>
        <hr/>
    </>
};

