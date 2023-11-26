import React from 'react';

type ButtonPropsType = {
    name: string
    onClick: () => void
    disabled: boolean
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    const {name, onClick, disabled, ...rest} = props

    const onClickHandler = () => {
        onClick()
    }

    return (
        <button disabled={disabled} onClick={onClickHandler} className={`button ${disabled ? 'disabled' : ''}`}>
            {name}
        </button>
    );
};

