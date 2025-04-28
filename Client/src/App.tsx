import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import MemberDashboard from './pages/MemberDashboard';
import Allbooks from './pages/Allbooks';
import Header from './components/Header';
import SignIn from './pages/SignIn';
import { AuthContext } from './context/AuthContext';

const App: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/signin" 
            element={
              user ? <Navigate to="/dashboard@member" /> : <SignIn />
            } 
          />
          <Route 
            path="/dashboard@member" 
            element={
              user ? <MemberDashboard /> : <Navigate to="/signin" />
            } 
          />
          <Route path="/books" element={<Allbooks />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
