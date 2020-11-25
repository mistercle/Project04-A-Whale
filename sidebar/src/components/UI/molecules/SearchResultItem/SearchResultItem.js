import React from 'react';
import styled from 'styled-components';
import Span from '../../atoms/Span/Span';

const SearchResultItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleStyle = {
  fontWeight: 'bold',
  fontSize: '16px',
  marginLeft: '7px',
};

const DesignerStyle = {
  fontSize: '12px',
  marginLeft: '12px',
  textAlign: 'center',
  verticalAlign: 'center',
};

const RefNumStyle = {
  fontSize: '10px',
  paddingLeft: '10px',
  textAlign: 'center',
  verticalAlign: 'center',
};

const SearchResultItem = ({ bucket }) => {
  const { bucketTitle, bucketDesigner, bucketRefNum, bucketData } = bucket;
  return (
    <SearchResultItemWrapper>
      <Span name="bucketTitle" style={TitleStyle} content={bucketTitle} />
      <Span name="bucketDesigner" style={DesignerStyle} content={`@${bucketDesigner}`} />
      <Span name="bucketRefNum" style={RefNumStyle} content={`(${bucketRefNum}건)`} />
    </SearchResultItemWrapper>
  );
};

export default SearchResultItem;
