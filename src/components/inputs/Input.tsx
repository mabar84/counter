import React from 'react';

type InputPropsType = {
    value: number
}

export const Input: React.FC<InputPropsType> = ({value}) => {
    return (
        <>
            <input type="number" value={value}/>
        </>
    );
};

