import * as Action from './actionTypes';
import getAvatar from '../../api/getAvatar';

export function updateAvatar(avatar) {
  return { type: Action.UPDATE_AVATAR, payload: avatar };
}

export function loadAvatar() {
  return dispatch => {
    getAvatar()
    .then(avatar => dispatch(updateAvatar(avatar)));
  };
}
