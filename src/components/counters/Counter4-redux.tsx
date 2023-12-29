import React, {useEffect} from 'react';
import {Button} from '../buttons/Button';
import {Wrapper} from '../wrappers/Wrapper';
import {ToSetValue} from '../to-set-value/ToSetValue';
import Screen from '../screen/Screen';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {
    setError4AC,
    setErrorMinMax4AC,
    setHideSetAC,
    setMaxValue4AC,
    setMinValue4AC,
    setValue4AC
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
        dispatch(setValue4AC(minValue))
        const minValueLS = localStorage.getItem('minValue4')
        const maxValueLS = localStorage.getItem('maxValue4')
        minValueLS && dispatch(setMinValue4AC(JSON.parse(minValueLS)))
        maxValueLS && dispatch(setMaxValue4AC(JSON.parse(maxValueLS)))
        minValueLS && dispatch(setValue4AC(JSON.parse(minValueLS)))
    }, [])

    useEffect(() => {
        dispatch(setError4AC(value >= maxValue))
        dispatch(setErrorMinMax4AC(minValue === maxValue))
    }, [value, minValue, maxValue])

    const increment = () => {
        value < maxValue && dispatch(setValue4AC(value + 1))
    }

    const reset = () => dispatch(setValue4AC(minValue))

    const switchSettings = () => {
        dispatch(setHideSetAC(!hideSet))
        dispatch(setValue4AC(minValue))
    }
    const saveSettings = () => {
        dispatch(setHideSetAC(!hideSet))
        dispatch(setValue4AC(minValue))
        localStorage.setItem('minValue4', JSON.stringify(minValue))
        localStorage.setItem('maxValue4', JSON.stringify(maxValue))
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

