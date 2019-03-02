import React from 'react';
import Card from './Card';

const CardList = ({robotList}) => {

    return (
        <div>
            {
            robotList.map(rob => 
                <Card key={rob.id} id={rob.id} name={rob.name} username={rob.username} email={rob.email} />)
            }
        </div>
    );
}

export default CardList;