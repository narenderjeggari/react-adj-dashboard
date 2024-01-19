import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import "./App.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "theme/theme";
import MainLayout from "shared/components/MainLayout/MainLayout";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="h-full">
          <MainLayout></MainLayout>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
