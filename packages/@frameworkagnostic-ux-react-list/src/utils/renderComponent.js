
import React from 'react';

export const renderComponent = (Component) => {
  if (!Component) {
    return null;
  }

  if (React.isValidElement(Component)) {
    return Component;
  }

  return React.createElement(Component, {});
};
