import React from 'react';
import styled from 'styled-components';
import Span from '../../atoms/Span/Span';

const SearchResultItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
`,

const SearchResultItem = ({bucketTitle, bucketDesigner, bucketRefNum, bucketData}) => {
    return (
        <SearchResultItemWrapper>
            <Span name="bucketTitle" content={bucketTitle}/>
            <Span name="bucketDesigner" content={bucketDesigner}/>
            <Span name="bucketRefNum" content={bucketRefNum}/>
        </SearchResultItemWrapper>
    );
}

export default SearchResultItem;