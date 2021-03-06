// Copyright (c) 2016 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {handle, initialState} from './helpers.js';
import {DeviceTypes as types} from 'constants';
export const initState = initialState();

export default function device(state = initState, action) {
    return handle(
      types.DEVICE_REQUEST,
      types.DEVICE_SUCCESS,
      types.DEVICE_FAILURE,
      state,
      action);
}
