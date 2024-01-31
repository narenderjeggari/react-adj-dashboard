import { UserManager } from "@forgerock/javascript-sdk";
import { useEffect, useState } from "react";

export const useAuthValidation = (auth: any, setAuth: any) => {
  const [isValid, setValid] = useState("unknown");

  useEffect(() => {
    validateAccessToken();
  }, [auth]);

  const validateAccessToken = async () => {
    if (auth) {
      try {
        await UserManager.getCurrentUser();
        setValid("valid");
      } catch (err) {
        console.info(`Info: route validation; ${err}`);

        setAuth(false);
        setValid("invalid");
      }
    } else {
      setValid("invalid");
    }
  };

  return [
    {
      isValid,
    },
  ];
};
