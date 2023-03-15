import React from 'react';
import Record from './Record';

const RecordList = ({ records, baskets, setBaskets }) => {
    const recordNodes = records.map((record) => {
        return <Record 
        key={record.id} 
        records={record}
        baskets={baskets}
        setBaskets={setBaskets} />
    })
    
    return (  
        <>
        {recordNodes}
        </>
    );
}
 
export default RecordList;