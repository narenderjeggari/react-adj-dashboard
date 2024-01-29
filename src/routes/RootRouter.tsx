import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MainLayout from "shared/components/MainLayout/MainLayout";

const RootRouter = () => {
  return (
    <Fragment>
      <Router basename="/">
        <Routes>
          <Route path="/dashboard" element={<MainLayout />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default RootRouter;
