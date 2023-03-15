import React, { useState } from 'react';
import styled from 'styled-components';


const RecordInfo = styled.p`
    text-align: center;
    display:flex;
    justify-content:space-evenly;
`

const RecordContainer = styled.div`
    border-style: solid;
    display: flex; 
    justify-content:space-evenly;
    align-items: center;
    margin: 10px; 
    margin-left: 180px; 
    margin-right: 180px; 

`



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
        <RecordContainer>
            <RecordInfo>Artist: {records.artistName}</RecordInfo>
            <RecordInfo>Album: {records.albumName}</RecordInfo>
            <RecordInfo>Price: £{records.albumCost}</RecordInfo>
            <RecordInfo>{!isBasket ? 
            <button onClick={handleClick}>Add to basket</button>
            :
            <button onClick={handleClick}>Remove from basket</button>
            }</RecordInfo>
        </RecordContainer>
    
    </>
    );
}
 
export default Record;