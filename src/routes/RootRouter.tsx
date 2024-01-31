import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "shared/components/Login/Login";
import MainLayout from "shared/components/MainLayout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

const RootRouter = () => {
  return (
    <Fragment>
      <Router basename="/">
        <Routes>
          <Route path="/dashboard" element={<ProtectedRoute><MainLayout /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default RootRouter;
