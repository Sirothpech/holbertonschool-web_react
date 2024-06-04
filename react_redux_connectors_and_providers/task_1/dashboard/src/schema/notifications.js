import { normalize, schema } from 'normalizr';
import notificationsData from '../../dist/notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

const notificationsNormalizer = (data) => {
  const notificationSchema = new schema.Array(notification);
  return normalize(data, notificationSchema);
};

const getAllNotificationsByUser = (userId) => {
  const { entities } = notificationsNormalizer(notificationsData.default);
  const { notifications, messages } = entities;

  return Object.values(notifications).reduce((result, notification) => {
    if (notification.author === userId) {
      result.push(messages[notification.context]);
    }
    return result;
  }, []);
};

export { getAllNotificationsByUser, notificationsNormalizer };