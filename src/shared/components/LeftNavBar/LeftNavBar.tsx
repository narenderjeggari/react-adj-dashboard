import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import React from "react";

import {
  LayersOutlined,
  BarChartOutlined,
  PeopleOutlined,
  ShoppingCartOutlined,
  DashboardOutlined,
} from "@mui/icons-material";

const drawerWidth: number = 300;
const MUIDrawer = styled(Drawer, {
  shouldForwardProp: (prop: string) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    backgroundColor: '#e2e2e2',
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const MUIListItemText = styled(ListItemText)(() => ({
  "& .MuiTypography-root": {
    fontWeight: 500,
    fontSize: 18
  }
}));

const LeftNavBar = () => {
  return (
    <MUIDrawer variant="permanent">
      <Toolbar />
      <List component="nav">
        <React.Fragment>
          <ListItemButton className="!bg-gray-300 !bg-opacity-70 !text-sky-600">
            <ListItemIcon>
              <DashboardOutlined className="text-sky-600"/>
            </ListItemIcon>
            <MUIListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartOutlined className="text-slate-600"/>
            </ListItemIcon>
            <MUIListItemText primary="Orders" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <PeopleOutlined className="text-slate-600"/>
            </ListItemIcon>
            <MUIListItemText primary="Customers" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <BarChartOutlined className="text-slate-600"/>
            </ListItemIcon>
            <MUIListItemText primary="Reports" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <LayersOutlined className="text-slate-600"/>
            </ListItemIcon>
            <MUIListItemText primary="Integrations" />
          </ListItemButton>
        </React.Fragment>
      </List>
    </MUIDrawer>
  );
};

export default LeftNavBar;
