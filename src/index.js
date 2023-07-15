import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {UserProvider} from './userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <UserProvider>
       <App />
    </UserProvider>
);

// JSX -> Browser?? (JS)
// Babel

