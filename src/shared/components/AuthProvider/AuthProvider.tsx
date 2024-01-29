import React, { Fragment, ReactNode, useEffect } from "react";
import Widget, {
  component,
  configuration,
  journey,
} from "@forgerock/login-widget";
import "@forgerock/login-widget/widget.css";

type AuthProviderProps = {
  children: ReactNode | JSX.Element;
};

const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const config = configuration();
  const componentEvents = component();
  const journeyEvents = journey();
  const element = document.getElementById("widget-root");
  useEffect(() => {
    config.set({
      forgerock: {
        serverConfig: {
          baseUrl: "https://openam-forgerock-sdks.forgeblocks.com/am/",
          timeout: 3000,
        },
      },
    });
    const widget = new Widget({ target: element ? element : document });

    const journeyEventsUnsub = journeyEvents.subscribe((event) => {
      if (event.user.response) {
        console.log(event.user.response);
      }
    });
    journeyEvents.start();
    componentEvents.open();
    return () => {
      widget.$destroy();
      journeyEventsUnsub();
    };
  }, []);
  return <Fragment>{children}</Fragment>;
};

export default AuthProvider;
