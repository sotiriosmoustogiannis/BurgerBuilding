import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BurgerBuilder from './pages/burger/BurgerBuilder';
import LoginPage from './pages/login/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import './App.css';

const App: React.FC = () => {

  return (
    <Router>
      <div className="App">
        <h1 className='title'>Burger Builder App</h1>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route path='/' element={
            <ProtectedRoute>
              <BurgerBuilder/>
            </ProtectedRoute>
          }>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
