import React from 'react';
import styled from 'styled-components';
import BucketCreateButton from '../../molecules/bucket_create_button';
import ResetButton from '../../molecules/reset_button';

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 15px;
`;

const Buttons = () => {
  return (
    <ButtonsWrapper>
      <BucketCreateButton />
    </ButtonsWrapper>
  );
};

export default Buttons;
