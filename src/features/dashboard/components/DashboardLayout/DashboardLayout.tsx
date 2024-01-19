import React from "react";
import CaseDataTable from "../CaseDataTable/CaseDataTable";
import CaseBarChart from "../CaseBarChart/CaseBarChart";
import CaseGuageChart from "../CaseGuageChart/CaseGuageChart";
import { Grid, Paper, Typography } from "@mui/material";
import CaseStatusCard from "../CaseStatusCard/CaseStatusCard";

const DashboardLayout = () => {
  return (
    <Grid container spacing={3} className="h-full">
      <Grid item xs={12}>
        <Typography variant="h5" className="py-3">
          Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className="p-2" sx={{ height: 255 }}>
              <Typography variant="h6" className="pb-2">Units</Typography>
              <CaseGuageChart></CaseGuageChart>
            </Paper>
          </Grid>
          <Grid item xs={6} className="!h-full">
            <Paper className="p-2">
              <Typography variant="h6" className="pb-2">Employee Status</Typography>
              <CaseBarChart></CaseBarChart>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <CaseStatusCard></CaseStatusCard>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <CaseDataTable></CaseDataTable>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
