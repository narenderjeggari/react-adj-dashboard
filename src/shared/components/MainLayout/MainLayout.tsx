import React from "react";
import { Container, Box, Toolbar } from "@mui/material";
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import Header from "../Header/Header";
import DashboardLayout from "features/dashboard/components/DashboardLayout/DashboardLayout";

// Main component
function MainLayout() {
  return (
    <Box sx={{ display: "flex", height: '100%' }}>
      <Header />
      <LeftNavBar />
      <Box component="main">
        <Toolbar />
        <Container className="main-container bg-gray-100">
          <DashboardLayout />
        </Container>
      </Box>
    </Box>
  );
}

export default MainLayout;
