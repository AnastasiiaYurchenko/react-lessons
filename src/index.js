import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';

// const RandomHexColor = function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// };

const theme = {
  colors: {
    accent: 'orange',
    black: '#212121',
    white: '#fff',
    red: 'red',
    green: 'green',
    // randomColor: 'RandomHexColor()',
  },
  radii: {
    xs: '4px',
    sm: '8px',
    lg: '12px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
