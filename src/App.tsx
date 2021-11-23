import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './view/Home';
import SingIn from './view/SingIn';
import SingUp from './view/SingUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SingIp" element={<SingIn />} />
        <Route path="/SingUp" element={<SingUp />} />
      </Routes>
    </div>
  );
}

export default App;
