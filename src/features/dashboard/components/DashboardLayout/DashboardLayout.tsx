import React from "react";
import CaseDataTable from "../CaseDataTable/CaseDataTable";
import CaseBarChart from "../CaseBarChart/CaseBarChart";
import CaseGuageChart from "../CaseGuageChart/CaseGuageChart";
import CaseAlerts from "../CaseAlerts/CaseAlerts";
import CaseStatusCard from "../CaseStatusCard/CaseStatusCard";

const DashboardLayout = () => {
  
  return (
    <div className="flex flex-col h-full w-full gap-4 p-6">
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
          <div className="flex-1 h-full">
            <CaseDataTable></CaseDataTable>
          </div>
          <div className="flex-1 h-full">
            <CaseBarChart></CaseBarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
