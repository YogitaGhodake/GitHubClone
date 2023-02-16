import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <BrowserRouter/>
    <App />
    <BrowserRouter/>
  </React.StrictMode>
  </QueryClientProvider>,
);


reportWebVitals();
