import React, { Component } from 'react';

const Card = (props) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> {/* tachyons styles */}
            <img alt='robot' src={`https://www.robohash.org/${props.id}?size=200x200`} />
            <div className='robotInfo'>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;