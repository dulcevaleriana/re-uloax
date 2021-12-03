import './assets/css/style.scss';
import { Routes, Route } from "react-router-dom";
import Home from './view/Home';
import SignIn from './view/SignIn';
import SignUp from './view/SignUp';
import Menu from './component/Menu';
import Footer from './component/Footer';
import { useState } from 'react';

function App() {
  const [countView, setCountView] = useState(0);
  return (
    <div className="App" id="Home">
      <Menu 
          countView={countView}
          function0={() => setCountView(0)}
          function1={() => setCountView(1)}
          function2={() => setCountView(2)}
          function3={() => setCountView(3)}
          function4={() => setCountView(4)}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIp" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <span id="contactUs">
        <Footer 
          function0={() => setCountView(0)}
          function1={() => setCountView(1)}
          function2={() => setCountView(2)}
          function3={() => setCountView(3)}
          function4={() => setCountView(4)}
        />
      </span>
    </div>
  );
}

export default App;
