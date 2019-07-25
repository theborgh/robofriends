import React from 'react';

interface robot {
    id: number;
    name: string;
    email: string;
}

const Card = (props: robot) => {
    const {id, name, email} = props;
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'> {/* tachyons styles */}
            <img alt='robot' src={`https://www.robohash.org/${id}?size=200x200`} />
            <div className='robotInfo'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;