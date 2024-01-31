import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import "./App.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import RootRouter from "./routes/RootRouter";
import { Config, TokenStorage } from "@forgerock/javascript-sdk";
import {
  AppContext,
  useGlobalStateMgmt,
} from "shared/components/authentication/hooks/useGlobalStateMgmt";

Config.set({
  clientId: "",
  redirectUri: `${window.location.origin}/callback`,
  scope: "openid profile email",
  serverConfig: {
    baseUrl: "",
    timeout: 5000,
  },
  realmPath: "",
  tree: "",
});

function App() {
  let isAuthenticated: boolean = false;
  useEffect(() => {
    isUserAuthenticated();
  }, []);

  const isUserAuthenticated = async () => {
    try {
      isAuthenticated = !!(await TokenStorage.get());
    } catch (err) {
      console.error(`Error: token retrieval for hydration; ${err}`);
    }
  };

  const email = window.sessionStorage.getItem("sdk_email");
  const username = window.sessionStorage.getItem("sdk_username");

  const stateMgmt = useGlobalStateMgmt({
    email: email || "",
    isAuthenticated,
    username: username || "",
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="h-full">
          <AppContext.Provider value={stateMgmt}>
            <RootRouter />
          </AppContext.Provider>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
