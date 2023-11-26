import React, {useEffect, useState} from 'react';
import {Button} from '../buttons/Button';
import {Wrapper} from '../wrappers/Wrapper';
import {Input} from '../inputs/Input';

export const Counters = () => {


    // useEffect(()=>{
    //     localStorage.setItem('min','2')
    //     localStorage.setItem('max','7')
    //     // console.log(localStorage.getItem('min'))
    //
    //   let min=localStorage.getItem('min')
    //   let max=localStorage.getItem('min')
    //
    // },[])

      // let min=localStorage.getItem('min')
      // let max=localStorage.getItem('min')

    const [minValue, maxValue] = [0, 5]
    const [value, setValue] = useState(minValue)

    const increment = () => {
        value < maxValue && setValue((value) => value + 1)
    }
    const reset = () => {
        setValue(minValue)
    }


    const incButtonClickHandler=()=>{

    }

    return (
        <div className={`counter ${value === maxValue ? 'limit' : ''}`}>
            <div className={'value'}>
                {value}
            </div>

          <Wrapper >
                  <Button disabled={!(value < maxValue)} onClick={increment} name={'inc'}/>
                  <Button disabled={value === minValue} onClick={reset} name={'reset'}/>
          </Wrapper>

            <Input />


            <Button name={'INC'} onClick={incButtonClickHandler} disabled={false}/>

        </div>
    );
};

