import React from "react";
import CaseDataTable from "../CaseDataTable/CaseDataTable";
import CaseBarChart from "../CaseBarChart/CaseBarChart";
import CaseGuageChart from "../CaseGuageChart/CaseGuageChart";
import CaseAlerts from "../CaseAlerts/CaseAlerts";
import CaseStatusCard from "../CaseStatusCard/CaseStatusCard";
import { Typography } from "@mui/material";

const DashboardLayout = () => {
  return (
    <div className="flex h-full w-full">
      <div className="dashboard-left-panel border-r border-black p-6 h-full flex flex-col items-center justify-evenly">
      <span className="text-xl font-bold cursor-pointer">Dashboard</span>
        <span className="text-lg font-semibold cursor-pointer">Notifications</span>
        <span className="text-lg font-semibold cursor-pointer">Tasks</span>
        <span className="text-lg font-semibold cursor-pointer">Pages</span>
        <span className="text-lg font-semibold cursor-pointer">Maps</span>
        <span className="text-lg font-semibold cursor-pointer">Charts</span>
      </div>
      <div className="flex flex-col h-full gap-4 dashboard-right-panel p-6">
        <Typography variant="h4">Welcome, Caseload</Typography>
        <div className="flex h-1/3 gap-4">
          <div className="flex-1 h-full">
            <CaseGuageChart></CaseGuageChart>
          </div>
          <div className="flex-1 h-full border-black border">
            <CaseAlerts></CaseAlerts>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full h-2/3">
          <div className="flex gap-4 w-full h-1/3">
            <CaseStatusCard></CaseStatusCard>
          </div>
          <div className="flex gap-4 w-full h-2/3">
            <div className="w-1/2 h-full">
              <CaseDataTable></CaseDataTable>
            </div>
            <div className="w-1/2 h-full">
              <CaseBarChart></CaseBarChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
