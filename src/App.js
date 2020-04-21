import React from 'react';
import Form from './component/Form/Form'
import './App.css';

function App() {
  return (
    <div style={{
      background:"#ccb3b3",
      width:"100%",
      height:"100vh"
    }}>
    <div className="backimg">
      <h1>横浜のto doアプリ</h1>
      <Form />
    </div>
    </div>
  );
}

export default App;
