
import './global.css';
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <h1>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </h1>
  );
}

export default App;
