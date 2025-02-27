import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AppKitProvider } from '../src/config/Web3ModalProvider'; // Adjust the path if necessary
import { CharacterAnimationsProvider } from '../src/models/Contexts/CharcaterAnimation.jsx'; // Ensure the correct path
import CustomCursor from './components/CustomCursor.jsx'; // Ensure the correct path

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppKitProvider>
      <CharacterAnimationsProvider>
        <CustomCursor />
        <App />
      </CharacterAnimationsProvider>
    </AppKitProvider>
  </React.StrictMode>
);
