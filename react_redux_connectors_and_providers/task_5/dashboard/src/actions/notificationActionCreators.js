import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes";

const setLoadingState = (loading) => ({
  type: SET_LOADING_STATE,
  loading
});

const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  notifications
});

const fetchNotifications = () => {
  return async (dispatch) => {
    dispatch(setLoadingState(true)); // Set loading state to true
    try {
      // Fetch notifications from /notifications.json
      const response = await fetch("/notifications.json");
      if (!response.ok) {
        throw new Error("Failed to fetch notifications");
      }
      const data = await response.json();
      dispatch(setNotifications(data)); // Dispatch notifications data
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      dispatch(setLoadingState(false)); // Set loading state to false regardless of success or failure
    }
  };
};

export { setLoadingState, setNotifications, fetchNotifications };
