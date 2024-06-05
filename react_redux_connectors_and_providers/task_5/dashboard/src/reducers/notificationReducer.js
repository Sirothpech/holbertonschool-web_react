import { Map, List } from 'immutable';
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = Map({
  filter: 'DEFAULT',
  entities: Map(),
  result: List(),
  loading: false // Add loading attribute to initial state
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const addData = action.notifications.map(notification => ({ // Modify to use action.notifications
        ...notification,
        isRead: false
      }));
      const normalizedData = notificationsNormalizer(addData);
      return state.mergeDeep({
        entities: normalizedData.entities,
        result: normalizedData.result
      });

    case MARK_AS_READ:
      return state.setIn(['entities', 'notifications', String(action.index), 'isRead'], true);
      
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    case SET_LOADING_STATE: // Add SET_LOADING_STATE case
      return state.set('loading', action.isLoading);

    default:
      return state;
  }
};

export default notificationReducer;
