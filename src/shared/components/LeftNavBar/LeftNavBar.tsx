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
    fontSize: 18,
  },
}));

const LeftNavBar = () => {
  return (
    <MUIDrawer variant="permanent">
      <Toolbar />
      <List component="nav">
        <React.Fragment>
          <ListItemButton className="!border-l-4 !border-blue-400 !border-solid !bg-blue-100 !text-blue-500">
            <ListItemIcon>
              <DashboardOutlined className="text-blue-500"/>
            </ListItemIcon>
            <MUIListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartOutlined />
            </ListItemIcon>
            <MUIListItemText primary="Orders" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <PeopleOutlined />
            </ListItemIcon>
            <MUIListItemText primary="Customers" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <BarChartOutlined />
            </ListItemIcon>
            <MUIListItemText primary="Reports" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <LayersOutlined />
            </ListItemIcon>
            <MUIListItemText primary="Integrations" />
          </ListItemButton>
        </React.Fragment>
      </List>
    </MUIDrawer>
  );
};

export default LeftNavBar;
