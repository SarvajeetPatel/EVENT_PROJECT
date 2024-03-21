import './App.css';
import { Routes, Route } from 'react-router-dom'
import SignInSide from './components/SignIn';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignInSide />} />
      </Routes>
    </>
  );
}

export default App;
