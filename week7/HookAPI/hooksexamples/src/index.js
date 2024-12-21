import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hook_ControlledButtonState from './Counter';
import EmojeeCounter from './EmojeeCounter';
import TextToEmoji from './TextToEmoji';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Hook_ControlledButtonState />
    <EmojeeCounter pic="Love" />
    <EmojeeCounter pic="Sad" />
    <EmojeeCounter pic="Like" />
    <TextToEmoji />
  </React.StrictMode>
);
