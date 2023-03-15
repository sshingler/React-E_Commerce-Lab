import React, { useState } from 'react';
import RecordList from "../components/RecordList";


const RecordShopContainer = ({baskets, setBaskets}) => {
    
    const [records, setRecords] = useState([
        { id: 1, artistName: "The Beatles", albumName: "Norwegian Wood", albumCost: 7 },
        { id: 2, artistName: "AC/DC", albumName: "Back in Black", albumCost: 8 },
        { id: 3, artistName: "The Rolling Stones", albumName: "Beggars Banquet", albumCost: 8 },
    ]);






    return ( 
        <>
        <h2>Record Shop</h2>
    
        <RecordList records={records} baskets={baskets} setBaskets={setBaskets} />
        </>
     );
}
 
export default RecordShopContainer;