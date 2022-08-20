import { Icon } from '@chakra-ui/react';
import React from 'react';

export const CheckSquareIcon = ({ ...props }) => (
  <Icon viewBox="0 0 30 30" {...props} xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="30" rx="12" fill="currentColor" />
    <path
      d="M12 19.17L7.83 15L6.41 16.41L12 22L24 9.99997L22.59 8.58997L12 19.17Z"
      fill={props.checkColor}
    />
  </Icon>
);
