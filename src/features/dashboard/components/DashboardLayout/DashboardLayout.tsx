import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import TotalResourcesCard from "../TotalResourcesCard/TotalResourcesCard";
import TaskCompletionRate from "../TaskCompletionRate/TaskCompletionRate";

const DashboardLayout = () => {
  return (
    <div className="flex justify-between h-full w-full gap-4 p-6">
      <div className="flex flex-col h-full gap-4 w-1/2">
        <div className="flex flex-col gap-4 h-1/2">
          <div className="flex w-full h-2/5 gap-4">
            <div className="flex flex-1 border-black border h-full w-full">
              <ProjectCard></ProjectCard>
            </div>
            <div className="flex flex-1 border border-black h-full">
                <TotalResourcesCard></TotalResourcesCard>
            </div>
            <div className="flex flex-1 border border-black h-full">
                <TaskCompletionRate></TaskCompletionRate>
            </div>
          </div>
          <div className="flex w-full h-3/5 gap-4">
            <div className="flex flex-1 border-black border h-full"></div>
            <div className="flex flex-1 border border-black h-full"></div>
          </div>
        </div>
        <div className="flex gap-4 h-1/2">
          <div className="flex flex-1 border-black border h-full"></div>
        </div>
      </div>
      <div className="flex flex-col h-full gap-4 w-1/2">
        <div className="flex justify-between gap-4 h-1/2">
          <div className="flex flex-1 border-black border h-full"></div>
          <div className="flex flex-1 border border-black h-full"></div>
        </div>
        <div className="flex justify-between gap-4 h-1/2">
          <div className="flex flex-1 border-black border h-full"></div>
          <div className="flex flex-1 border border-black h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
