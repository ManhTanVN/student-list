import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './Pages/Home';
import StudentListPage from './Pages/StudentList';
import ContactPage from './Pages/Contact';

function App() {
    return (
        <div className="app">
            <nav className="navbar navbar-expand-lg bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/student-list">
                            Student List
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/student-list" element={<StudentListPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    );
}

export default App;
