// App.js
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {

  const [page, setPage] = useState('home');

  // TODO: How doe sthe Layout component know which page to render?

  return (
    <Router>
        <div>Links:
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">contact</Link>
            </li>
          </ul>
        </div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/About" element={<AboutPage/>}/>
        <Route path="/Contact" element={<ContactPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
