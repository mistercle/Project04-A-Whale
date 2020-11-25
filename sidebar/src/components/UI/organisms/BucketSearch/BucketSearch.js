import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import SelectInput from '@material-ui/core/Select/SelectInput';
import BucketSearchBar from '../../molecules/BucketSearchBar/BucketSearchBar';
import SearchResultItem from '../../molecules/SearchResultItem/SearchResultItem';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const BucketSearchWrapper = styled.div`
  display: flex;
`;

const BucketSearch = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);
  let timer = null;

  const handleClick = (e) => {
    console.log(e.currentTarget);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onChangeHandler = async (e) => {
    setLoading(true);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
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
  ];
  const data2 = [
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

  const options = loading ? data1 : data2;

  return (
    <BucketSearchWrapper>
      <Autocomplete
        id="combo-box-demo"
        options={options}
        getOptionLabel={(option) => option.bucketTitle}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="목표 검색" variant="outlined" onChange={onChangeHandler} />
        )}
      />
    </BucketSearchWrapper>
  );
};

export default BucketSearch;
