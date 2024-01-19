import { createTheme } from "@mui/material/styles";
import { blue, grey, red, amber, cyan, green } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      light: blue[300],
      dark: blue[600],
      contrastText: "#fff",
      ...blue,
    },
    secondary: {
      light: grey[300],      
      main: grey[500],
      dark: grey[700],
      ...grey,
      contrastText: grey[50]
    },
    error: {
      light: red[200],
      main: red[400],
      dark: red[700],
      ...red,
      contrastText: '#fff'
    },
    warning: {
      light: amber[300],
      main: amber[500],
      dark: amber[700],
      ...amber,
      contrastText: grey[100]
    },
    info: {
      light: cyan[300],
      main: cyan[500],
      dark: cyan[700],
      contrastText: '#fff',
      ...cyan
    },
    success: {
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText: '#fff',
      ...green
    },
    grey: grey
  },
});
