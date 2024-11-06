import React from 'react';
import './App.css';
import Question from './components/Question';
import { ConfigProvider } from 'antd';


function App() {
  return (
    <ConfigProvider >
      <Question />
    </ConfigProvider>
  );
}

export default App;
