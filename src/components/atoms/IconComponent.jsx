// src/components/IconComponent.jsx
import { Icon } from '@iconify-icon/react';
import React from 'react';

const IconComponent = ({ icon }) => (
  <Icon icon={icon} width="32" height="32" className="h-8 w-8"  aria-label={icon} />
);

export default IconComponent;
