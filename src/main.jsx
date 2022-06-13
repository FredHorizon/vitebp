import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';

import { MyThemeProvider } from './styles/MyThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <App>Conteúdo do App no main</App>
    </MyThemeProvider>
  </React.StrictMode>,
);
