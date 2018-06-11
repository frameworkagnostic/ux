
import React from 'react';
import { Container2Row } from './Container2Row';

export const name = 'Templates';

export const examples = {
  'Container2Row instance': () => {
    const Header = () => <h1>Hello</h1>;
    const Content = () => <p>Hello</p>;
    return (<Container2Row layoutSections={{
      Header: <Header />,
      Content: <Content />,
    }}
    />);
  },
  'Container2Row function': () => {
    const Header = () => <h1>Hello</h1>;
    const Content = () => <p>Hello</p>;
    return (<Container2Row layoutSections={{
      Header,
      Content,
    }}
    />);
  },

};
