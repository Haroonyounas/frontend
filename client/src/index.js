import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store';


const root = ReactDOM.createRoot(document.getElementById("root"));


const response = await axios.post("https://moviebooking-app.onrender.com",data);
cosole.log(response.data);
root.render(
<BrowserRouter>
<Provider store={store}>
    <App />
</Provider>
    
    </BrowserRouter>
);

