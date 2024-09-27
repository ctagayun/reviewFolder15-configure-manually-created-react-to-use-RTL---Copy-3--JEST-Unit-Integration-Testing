import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const title = 'React with Webpack and Babel. This is the output of React implementation src/index.js';

// ReactDOM.render(
//   <div>
//       <h1>
//       {title}
//       </h1>
//   </div>,
//   document.getElementById('app')
// );

module.hot.accept();