import React from 'react';
import './App.css'; // Import CSS file
import Form from './components/Form';
import UserList from './components/UserList';
import ThreeDComponent from './components/ThreeDComponent';
import ContinuousRequest from './components/ContinuousRequest';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React App</h1>
        <Form />
        <UserList />
        <div className="three-d-component-wrapper">
          {/* Set max-width and max-height for the container */}
          <div style={{ maxWidth: '60px', maxHeight: '40px', overflow: 'hidden' }}>
            <ThreeDComponent />
          </div>
        </div>
        <ContinuousRequest /> {/* Thêm ContinuousRequest vào đây */}
      </header>
    </div>
  );
}

export default App;
