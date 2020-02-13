import keys from '../keys';

import {
  FETCH_SETTINGS,
} from './types';

import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: keys.ghost,
  version: "v3"
});

export const getSettings = () => async (dispatch) => {
  const data = await api.settings.browse();
  dispatch({ 
    type: FETCH_SETTINGS, 
    payload: data
  });
};
