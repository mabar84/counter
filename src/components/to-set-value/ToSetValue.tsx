import React from 'react';
import s from './ToSetValue.module.css'
import {Button} from '../buttons/Button';

type ToSetValuePropsType = {
    value: number
    title: string
    setValue: (value: number) => void
}


export const ToSetValue: React.FC<ToSetValuePropsType> = (props) => {

    const {value, ...rest} = props

    const dec = () => {
        props.setValue(value - 1)
    }
    const inc = () => {
        props.setValue(value + 1)
    }


    return (
        <div className={s.toSetValue}>
            <p>{props.title}  </p>
            <Button name={'dec'} onClick={dec} disabled={false}/>
            <p className={s.value}> {value} </p>
            <Button name={'inc'} onClick={inc} disabled={false}/>

        </div>
    );
};