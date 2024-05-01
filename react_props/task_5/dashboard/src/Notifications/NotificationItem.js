import React from 'react';
import PropType from 'prop-types'

export default function NotificationItem({ type = 'default', value, html }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html ? html : null}>
      {html ? null : value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropType.string.isRequired,
  value: PropType.string,
  html: PropType.shape({ __html: PropType.string }),
};
