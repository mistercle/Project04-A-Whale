import React, { useState } from 'react';
import styled from 'styled-components';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import SearchResultItem from '../../molecules/SearchResultItem/SearchResultItem';
import Span from '../../atoms/Span/Span';

const BucketSearchWrapper = styled.div`
  display: flex;
  padding: 15px;
  width: 500px;
`;

const BucketSearch = () => {
  const [loading, setLoading] = useState(false);
  let timer = null;

  const onChangeHandler = async (e) => {
    setLoading(true);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const data1 = [
    {
      bucketTitle: 'Be president',
      bucketDesigner: 'trump',
      bucketRefNum: 4,
      bucketData: {
        bucketTitle: 'Be president',
        bucketDescription: 'Ill be president',
        bucketDetails: ['do not '],
      },
    },
    {
      bucketTitle: 'Be smarter',
      bucketDesigner: 'Dude',
      bucketRefNum: 7,
      bucketData: {
        bucketTitle: 'Be smarter',
        bucketDescription: 'what',
        bucketDetails: ['gooooood'],
      },
    },
  ];
  const preData = [
    {
      bucketTitle: 'Loading',
    },
  ];

  const data = loading ? preData : data1;

  return (
    <BucketSearchWrapper>
      <Autocomplete
        id="combo-box-demo"
        options={data}
        filterOptions={(options, state) => options}
        getOptionLabel={(option) => option.bucketTitle}
        getOptionDisabled={() => loading}
        style={{ width: 300 }}
        renderOption={(option) => {
          if (loading) return <Span content="loading" />;
          return <SearchResultItem bucket={option} />;
        }}
        renderInput={(params) => (
          <TextField {...params} label="목표 검색" variant="outlined" onChange={onChangeHandler} />
        )}
      />
    </BucketSearchWrapper>
  );
};

export default BucketSearch;
