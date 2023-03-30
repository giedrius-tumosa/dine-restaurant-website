import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { TextContentProvider } from './components/store/TextContentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <TextContentProvider>
        <App />
      </TextContentProvider>
    </HashRouter>
  </React.StrictMode>
);
