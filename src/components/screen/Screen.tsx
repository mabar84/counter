import React from 'react';

type ScreenPropsType = {
    children: React.ReactNode
}

const Screen: React.FC<ScreenPropsType> = ({children}) => {
    return (
        <div className={'screen'}>
            {children}
        </div>
    );
};

export default Screen;