import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_BUCKETS = 'buckets/GET_BUCKETS';
const GET_BUCKETS_SUCCESS = 'buckets/GET_BUCKETS_SUCCESS';

const UPDATE_BUCKET_STATUS = 'buckets/UPDATE_BUCKET_STATUS';
const UPDATE_BUCKET_STATUS_SUCCESS = 'buckets/UPDATE_BUCKET_STATUS_SUCCESS';

export const getBuckets = createRequestThunk(GET_BUCKETS, api.getBuckets);
export const updateBucketStatus = createRequestThunk(UPDATE_BUCKET_STATUS, api.updateBucketStatus);

const initialState = {
  buckets: {
    openBuckets: [],
    achieveBuckets: [],
    giveUpBuckets: [],
  },
};

const getUpdateBuckets = ({ buckets }, { bucketNo, status }) => {
  const openIdx = buckets.openBuckets.findIndex((bucket) => {
    return bucket.no === bucketNo;
  });

  if (openIdx > -1 && status === 'G') {
    buckets.openBuckets[openIdx].status = 'G';
    buckets.giveUpBuckets.push(buckets.openBuckets[openIdx]);
    buckets.openBuckets.splice(openIdx, 1);
    return buckets;
  }

  const giveUpIdx = buckets.giveUpBuckets.findIndex((bucket) => {
    return bucket.no === bucketNo;
  });

  if (giveUpIdx > -1 && status === 'O') {
    buckets.giveUpBuckets[giveUpIdx].status = 'O';
    buckets.openBuckets.push(buckets.giveUpBuckets[giveUpIdx]);
    buckets.giveUpBuckets.splice(giveUpIdx, 1);
    return buckets;
  }
  return buckets;
};

const buckets = handleActions(
  {
    [GET_BUCKETS_SUCCESS]: (state, action) => ({
      ...state,
      buckets: action.payload.data,
    }),
    [UPDATE_BUCKET_STATUS_SUCCESS]: (state, action) => ({
      ...state,
      buckets: getUpdateBuckets(state, action.params),
    }),
  },
  initialState
);

export default buckets;