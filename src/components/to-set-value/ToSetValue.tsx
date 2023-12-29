import React from 'react';
import {Button} from '../buttons/Button';
import {useDispatch} from 'react-redux';
import {setMaxValue4AC, setMinValue4AC} from '../../state/couner4-reducer';

type ToSetValuePropsType = {
    value: number
    minValue: number
    maxValue: number
    title: string
    setValue?: (value: number) => void
}

export const ToSetValue: React.FC<ToSetValuePropsType> = (props) => {

    const {title, minValue, maxValue, value} = props
    const dispatch = useDispatch()

    const dec = () => {
        console.log('dec', value)
        title === 'MinValue'
            ? dispatch(setMinValue4AC(value - 1))
            : dispatch(setMaxValue4AC(value - 1))

        props.setValue && props.setValue(value - 1)
    }
    const inc = () => {
        title === 'MinValue'
            ? dispatch(setMinValue4AC(value + 1))
            : dispatch(setMaxValue4AC(value + 1))

        props.setValue && props.setValue(value + 1)
    }
    return (
        <div className={'toSetValue'}>
            {title === 'MinValue'
                ?
                <>
                    <p>{title}  </p>
                    <Button name={'dec'} onClick={dec} disabled={minValue === 0}/>
                    <p className={'value'}> {value} </p>
                    <Button name={'inc'} onClick={inc} disabled={minValue >= maxValue}/>
                </>
                :
                <>
                    <p>{title}</p>
                    <Button name={'dec'} onClick={dec} disabled={minValue >= maxValue}/>
                    <p className={'value'}> {value} </p>
                    <Button name={'inc'} onClick={inc} disabled={maxValue >= 99}/>
                </>
            }
        </div>
    );
};