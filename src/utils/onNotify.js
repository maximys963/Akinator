import { Icon, notification } from 'antd';
import React from 'react';
import { RaccoonIcon } from '../assets/icons/raccoon/RaccoonIcon';

export const onNotify = (placement, message, description) => {
  notification.info({
    message,
    icon: <Icon component={RaccoonIcon} />,
    description,
    placement,
  });
};
