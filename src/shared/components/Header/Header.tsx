import React from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Box, IconButton, Toolbar, Typography, styled } from "@mui/material";
import Notifications from "../Notifications/Notifications";
import { AccountCircle } from "@mui/icons-material";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop: string) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  boxShadow: "none",
  borderBottomWidth: 1,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = () => {
  return (
    <AppBar position="absolute" >
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <Typography component="h1" variant="h6" className="!tracking-wider" fontWeight={600} noWrap>
          ADJ Dashboard
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center' }}>
          <Notifications />
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <span className="pl-2 text-white font-medium">Welcome, Srujana</span>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
