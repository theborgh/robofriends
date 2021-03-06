import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input className='bg-lightest-blue dib br3 pa3 ma2 bw2 shadow-5' type='search' placeholder='Type the name of a bot to search' onChange={searchChange} />
        </div>
    );
}

export default SearchBox;