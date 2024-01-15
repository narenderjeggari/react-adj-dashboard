import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

const TaskCompletionRate = () => {
  return (
    <Card className="w-full">
      <CardHeader title="Task completion rate" className="text-center"></CardHeader>
      <div className="border-4 border-black mx-9"></div>
      <CardContent className="text-center">
        <Typography variant="h3" className="font-bold">70.10%</Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCompletionRate;
