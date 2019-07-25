import React from 'react';

const Scroll = (props: { children: React.ReactNode; }) => {

    return (
        <div style={{overflowY: 'scroll', height: '500px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;