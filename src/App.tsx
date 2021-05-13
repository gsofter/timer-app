import React from 'react';
import logo from './logo.svg';
import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import { MainPage } from './pages/MainPage';
import 'antd/dist/antd.css';
import './App.css';
const renderer = createRenderer();

function App() {
  return (
    <RendererProvider renderer={renderer}>
      <MainPage />
    </RendererProvider>
  );
}

export default App;
