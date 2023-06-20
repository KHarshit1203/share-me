import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode } from 'react';

import App from './app';
import './main.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
