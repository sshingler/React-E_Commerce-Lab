import React from 'react';
import Record from './Record';
import styled from 'styled-components';

const RecordsHeader = styled.h3`
text-align: center;
text-decoration: underline;
`

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
       <RecordsHeader>All Records</RecordsHeader>
        {recordNodes}
        </>
    );
}
 
export default RecordList;