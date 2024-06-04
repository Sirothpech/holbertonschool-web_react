import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../dist/notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

const normalizeData = (notificationsData) => {
  const notificationSchema = new schema.Array(notification);
  return normalize(notificationsData, notificationSchema);
};

const getAllNotificationsByUser = (userId) => {
  const { entities } = normalizeData(notificationsData.default);
  const { notifications, messages } = entities;

  return Object.values(notifications).reduce((result, notification) => {
    if (notification.author === userId) {
      result.push(messages[notification.context]);
    }
    return result;
  }, []);
};

export { getAllNotificationsByUser, normalizeData };