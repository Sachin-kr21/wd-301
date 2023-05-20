// import React from "react";
// import { Routes, Route, useLocation, Navigate } from "react-router-dom";
// import "./App.css";

// import Header from "./Header";
// import HomePage from "./HomePage";
// import TaskApp from "./TaskApp";
// import TaskDetailsPage from "./TaskDetailsPage";
// import Signin from "./Signin";
// import { ProtectedRoute } from "./ProtectedRoute";
// import NotFound from "./NotFound";
// import ReactPlayground from './ReactPlayground';
// import Form from './Form';
// import Signup from "./pages/signup";

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NotFound from "./NotFound";
import Signup from './pages/signup';
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard"
import { ProtectedRoute } from "./ProtectedRoute"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/dashboard" element={<ProtectedRoute element={ <Dashboard/> } />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </div>
  );
}

export default App;