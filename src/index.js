import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';
import './index.css'

ReactDOM.render(
  <SpeechProvider appId='2aefae8c-4049-4a26-ac21-c573bea9d2b4' language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);



