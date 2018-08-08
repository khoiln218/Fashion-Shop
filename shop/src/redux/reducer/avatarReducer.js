import * as Action from '../action/actionTypes';

import profileIcon from '../../media/asset/profile.png';

const DEFAULT_STATE = {
  avatar: profileIcon
};

const avatarReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case Action.UPDATE_AVATAR: {
      return {
        ...state,
        avatar: { uri: `data:image/png;base64,${action.payload}` }
      };
    }
    default:
      return state;
  }
};

export default avatarReducer;
