import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

const TotalResourcesCard = () => {
  return (
    <Card className="w-full">
      <CardHeader title="Total resources" className="text-center"></CardHeader>
      <div className="border-4 border-black mx-9"></div>
      <CardContent className="text-center">
        <Typography variant="h3" className="font-bold">50</Typography>
      </CardContent>
    </Card>
  );
};

export default TotalResourcesCard;
