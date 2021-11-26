import './assets/css/style.scss';
import { Routes, Route } from "react-router-dom";
import Home from './view/Home';
import SingIn from './view/SingIn';
import SingUp from './view/SingUp';
import Menu from './component/Menu';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SingIp" element={<SingIn />} />
        <Route path="/SingUp" element={<SingUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
