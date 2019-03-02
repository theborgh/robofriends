import React from 'react';

const SearchBox = () => {
    return (
        <div className='pa2'>
            <input className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5' type='search' placeholder='Type the name of a bot to search' />
        </div>
    );
}

export default SearchBox;