import { MARK_AS_READ, SET_TYPE_FILTER} from "./notificationActionTypes";
// import { bindActionCreators } from 'redux';
const markAsread = (index) => ({
	type: MARK_AS_READ,
	index
})

const setNotificationFilter = (filter) => ({
	type: SET_TYPE_FILTER,
	filter
})

export { markAsread, setNotificationFilter };

// const bounceMarkAsRead = (dispatch) => bindActionCreators(markAsread, dispatch);
// const bounceSetNotificationFilter = (dispatch) => bindActionCreators(setNotificationFilter, dispatch);

// export { bounceMarkAsRead, bounceSetNotificationFilter}