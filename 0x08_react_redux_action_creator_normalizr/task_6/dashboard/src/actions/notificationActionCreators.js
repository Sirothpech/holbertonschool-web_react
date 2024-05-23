import { MARK_AS_READ, SET_TYPE_FILTER} from "./notificationActionTypes";

const markAsread = (index) => ({
	type: MARK_AS_READ,
	index
})

const setNotificationFilter = (filter) => ({
	type: SET_TYPE_FILTER,
	filter
})

const bounceMarkAsRead = (dispatch) => bindActionCreators(markAsread, dispatch);
const bounceSetNotificationFilter = (dispatch) => bindActionCreators(setNotificationFilter, dispatch);

export { bounceMarkAsRead, bounceSetNotificationFilter}