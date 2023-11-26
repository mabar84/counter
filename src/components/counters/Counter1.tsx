import React, {useState} from 'react';
import {Button} from '../buttons/Button';
import {Wrapper} from '../wrappers/Wrapper';

export const Counter1 = () => {

    const [minValue, maxValue] = [0, 5]
    const [value, setValue] = useState(minValue)

    const increment = () => {
        value < maxValue && setValue((value) => value + 1)
    }
    const reset = () => {
        setValue(minValue)
    }

    return (
        <div className={`counter ${value === maxValue ? 'limit' : ''}`}>
            <div className={'value'}>
                {value}
            </div>

            <Wrapper>
                <Button disabled={!(value < maxValue)} onClick={increment} name={'inc'}/>
                <Button disabled={value === minValue} onClick={reset} name={'reset'}/>
            </Wrapper>
        </div>
    );
};

