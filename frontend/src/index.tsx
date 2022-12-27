import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './containers/Navbar/Navbar';
import Footer from './containers/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(58, 173, 144, 0.837)',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Sora, sans-serif'
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Navbar />
      <App />
      <ScrollToTop />
    <Footer />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
