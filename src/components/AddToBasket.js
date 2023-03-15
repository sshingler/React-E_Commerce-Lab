import React from 'react';

const AddToBasket = ({ baskets }) => {
    const basketNodes = baskets.map((record) => {
        return <div>
            <p key={record.id}>{record.artistName}</p>
            <p key={record.id}>{record.albumName}</p>
            <p key={record.id}>£{record.albumCost}</p>

            </div>
    })
    return ( 
        <>
        <h1>Basket</h1>
        {basketNodes}
        </>
     );
}
 
export default AddToBasket;