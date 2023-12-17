import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';
import ThreeDComponent from './components/ThreeDComponent';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React App</h1>
        <Form />
        <UserList />
        <ThreeDComponent />
      </header>
    </div>
  );
}

export default App;
