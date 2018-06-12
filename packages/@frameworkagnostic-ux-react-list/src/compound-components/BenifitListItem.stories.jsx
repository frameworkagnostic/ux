
import React from 'react';
import { BenifitListItem } from './BenifitListItem';

export const name = 'List/BenifitListItem';

export const examples = {
  standard: () => (
    <BenifitListItem heading="heading" subheading="subheading" />
  ),
  image: () => (
    <BenifitListItem
      heading="heading"
      subheading="subheading"
      styles={{
        image: {
          width: '10%'
        }
      }}
      imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png" />
  ),
};
