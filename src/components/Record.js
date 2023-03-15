import React, { useState } from 'react';

const Record = ({ records, baskets, setBaskets  }) => {
    
    const [isBasket, setIsBasket] = useState(false);

    function handleClick(){
        setIsBasket(!isBasket);
        if (isBasket) {
            const newBaskets = baskets.filter((item) => item.id !== records.id);
            setBaskets(newBaskets);
        } else {
            setBaskets([...baskets, records]);
        }
    }
    return ( 
        <>
        <p>Records</p>
        <p>Artist: {records.artistName}</p>
        <p>Album: {records.albumName}</p>
        <p>Price: £{records.albumCost}</p>
        {!isBasket ? 
        <button onClick={handleClick}>Add to basket</button>
        :
        <button onClick={handleClick}>Remove from basket</button>
    }
        </>
     );
}
 
export default Record;