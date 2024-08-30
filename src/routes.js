
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import CallEvaluation from './pages/CallEvaluation';
import CallDetails from './pages/CallDetails';
import Login from './pages/Login';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Protecting routes with PrivateRoute */}
        <Route path="/" element={<PrivateRoute><MainLayout /></PrivateRoute>}>
          <Route index element={<CallEvaluation />} />
          <Route path="/call-evaluation" element={<Home />} />    {/* change route name */}
          <Route path="/call-details" element={<CallDetails />} />
        </Route>

        {/* Redirect any unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};


export default AppRoutes;
