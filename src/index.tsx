import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/base.scss';
import { App } from './components/app/app';
import { HashRouter as Browser} from 'react-router-dom';
import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Browser>
          <App />
      </Browser>
  </React.StrictMode>
);
