// const rootElement = document.getElementById('root');
// const element = document.createElement('div');
// element.className = 'container';
// element.textContent = 'Hello World!';

// rootElement.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');
const element = React.createElement(
  'div',
  {
    className: 'container'
  },
  'Hello World'
);
ReactDOM.render(element, rootElement);
