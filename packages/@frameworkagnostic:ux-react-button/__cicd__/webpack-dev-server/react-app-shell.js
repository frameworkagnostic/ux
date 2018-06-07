import React from 'react';
import { render } from 'react-dom';

import './styles/global.scss';
import './styles/global.css';
import Button from 'src/base-components/Button/index.jsx';

const App = () => {
  return (
    <div>
      <Button>I am a button</Button>
    </div>
  )
}

render(
  <App />,
  document.querySelector('main')
)
