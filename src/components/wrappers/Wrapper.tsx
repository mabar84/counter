import React from 'react';

type WrapperPropsType={
    children:React.ReactNode
}


export const Wrapper:React.FC<WrapperPropsType> = (props) => {
    const {children,...rest}=props
    return (
        <div className={'wrapper'}>
            {children}
        </div>
    );
};