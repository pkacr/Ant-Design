import React from 'react';
import './App.css';
import Question from './components/Question';
import { ConfigProvider } from 'antd';


function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1DA57A', // เปลี่ยนสีหลัก
          colorLink: '#1DA57A', // เปลี่ยนสีลิงก์
        },
      }}
    >
      <Question />
    </ConfigProvider>
  );
}

export default App;
