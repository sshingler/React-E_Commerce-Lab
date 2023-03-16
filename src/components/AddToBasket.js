import React from 'react';
import styled from 'styled-components';

const BasketRecordInfo = styled.p`
    text-align: center;
    display:flex;
    justify-content:space-evenly;
`

const BasketRecordContainer = styled.div`
    border-style: solid;
    display: flex; 
    justify-content:space-evenly;
    align-items: center;
    margin: 10px; 
    margin-left: 180px; 
    margin-right: 180px; 
    background-color: #DED6D6
`
const BasketHeader = styled.h3`
    text-align: center;
    text-decoration: underline;
`


const AddToBasket = ({ baskets }) => {
    const basketNodes = baskets.map((record) => {
        return <BasketRecordContainer>
            <BasketRecordInfo key={record.id}>Artist: {record.artistName}</BasketRecordInfo>
            <BasketRecordInfo key={record.id}>Album: {record.albumName}</BasketRecordInfo>
            <BasketRecordInfo key={record.id}>Price: £{record.albumCost}</BasketRecordInfo>

            </BasketRecordContainer>
    })
    return ( 
        <>
        <BasketHeader>Your Basket</BasketHeader>
        {basketNodes}
        </>
     );
}
 
export default AddToBasket;