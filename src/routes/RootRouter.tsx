import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MainLayout from "shared/components/MainLayout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import Form from "shared/components/authentication/Form/Form";

const RootRouter = () => {
  return (
    <Fragment>
      <Router basename="/">
        <Routes>
          <Route path="/dashboard" element={<ProtectedRoute><MainLayout /></ProtectedRoute>} />
          <Route path="/login" element={<Form />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default RootRouter;
