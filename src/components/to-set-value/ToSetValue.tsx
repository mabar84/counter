import React from 'react';
import {Button} from '../buttons/Button';

type ToSetValuePropsType = {
    value: number
    minValue: number
    maxValue: number
    title: string
    setValue: (value: number) => void
}


export const ToSetValue: React.FC<ToSetValuePropsType> = (props) => {

    const {title, minValue, maxValue, value, ...rest} = props

    const dec = () => {
        props.setValue(value - 1)
    }
    const inc = () => {
        props.setValue(value + 1)
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