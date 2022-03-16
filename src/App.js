import './App.css';
import Menubar from './components/menu/MenuBar';
import Homepage from './components/home/Homepage';
import { Routes, Route, Link } from "react-router-dom"
import Profilepage from './components/ProfilePage';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active" end>Home</Link>
          </li>
          <li>
            <Link to="menu" activeClassName="active">Dashboard</Link>
          </li>
          <li>
            <Link to="profile" activeClassName="active">Profile</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="profile" element={<Profilepage />}></Route>
          <Route path="menu" element={<Menubar/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
