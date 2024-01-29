import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import "./App.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "theme/theme";
// import MainLayout from "shared/components/MainLayout/MainLayout";
import CssBaseline from "@mui/material/CssBaseline";
import AuthProvider from "shared/components/AuthProvider/AuthProvider";
import RootRouter from "routes/RootRouter";


function App() {
  
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="h-full">
          <AuthProvider >
            <RootRouter />
          </AuthProvider>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
