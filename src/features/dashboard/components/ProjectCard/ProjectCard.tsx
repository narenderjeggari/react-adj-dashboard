import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";

const ProjectCard = () => {
  return (
    <Card className="w-full">
      <CardHeader title="Project" className="text-center"></CardHeader>
      <div className="border-4 border-black mx-9"></div>
      <CardContent className="grid grid-cols-2 gap-3 w-full text-center">
        <span>Project 1</span>
        <span>Project 2</span>
        <span>Project 3</span>
        <span>Project 4</span>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
