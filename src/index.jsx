import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import Appli from './Appli';

ReactDOM.createRoot(document.getElementById('racine')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Appli />
    </BrowserRouter>
  </React.StrictMode>
);
