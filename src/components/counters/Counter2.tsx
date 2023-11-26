import React, {useEffect, useState} from 'react';
import {Button} from '../buttons/Button';
import {Wrapper} from '../wrappers/Wrapper';
import {Input} from '../inputs/Input';

export const Counter2 = () => {

    const [minValue, maxValue] = [0, 5]
    const [value, setValue] = useState(minValue)
    const [hideSet, setHideSet] = useState(true)

    const increment = () => {
        value < maxValue && setValue((value) => value + 1)
    }
    const reset = () => {
        setValue(minValue)
    }
    const set = () => {
        setHideSet(!hideSet)
        // setValue(minValue)
    }

    return (
        hideSet ?
            <div className={`counter ${value === maxValue ? 'limit' : ''}`}>
                <div className={'value'}>
                    {value}
                </div>

                <Wrapper>
                    <Button disabled={!(value < maxValue)} onClick={increment} name={'inc'}/>
                    <Button disabled={value === minValue} onClick={reset} name={'reset'}/>
                    <Button disabled={false} onClick={set} name={'set'}/>
                </Wrapper>
            </div>
            : <div className={'counter'}>
                <div className={'value'}>
                    <Input/>

                    <Input/>

                </div>

                <Wrapper>
                    <Button disabled={false} onClick={set} name={'set'}/>
                </Wrapper>
            </div>
    );
};

