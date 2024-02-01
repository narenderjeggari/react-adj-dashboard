/* eslint-disable no-fallthrough */
import { FRAuth, TokenManager, UserManager } from "@forgerock/javascript-sdk";
import React, { useContext, useEffect, useState } from "react";
import Loader from "shared/components/Loader/Loader";
import Text from "shared/components/Text/Text";
import { AppContext } from "../hooks/useGlobalStateMgmt";
import { useNavigate } from "react-router-dom";
import Password from "shared/components/Password/Password";

const Form = () => {
  const [step, setStep] = useState<any>(null);
  const [isAuthenticated, setAuthentication] = useState(false);
  const [_, methods] = useContext(AppContext) as any;
  const navigate = useNavigate();

  useEffect(() => {
    getStep();
  }, []);

  useEffect(() => {
    oauthFlow();
  }, [isAuthenticated]);

  const getStep = async () => {
    try {
      const initialStep = (await FRAuth.start()) as any;
      console.log(initialStep);
      setStep(initialStep);
    } catch (err) {
      console.error(`Error: request for initial step; ${err}`);
    }
  };

  const oauthFlow = async () => {
    try {
      const tokens = await TokenManager.getTokens();
      console.log(tokens);
      const user = await UserManager.getCurrentUser() as any;
      console.log(user);
      if (user) {
        methods.setUser(user.name);
        methods.setEmail(user.email);
        methods.setAuthentication(true);
        navigate('/dashboard');
      }
    } catch (err) {
      console.error(`Error: token request; ${err}`);
    }

    if (isAuthenticated) {
      oauthFlow();
    }
  };

  const handleFormSubmition = (event: any) => {
    event.preventDefault();
    async function getStep() {
      try {
        const nextStep = await FRAuth.next(step);
        if (nextStep.type === "LoginSuccess") {
          setAuthentication(true);
        }
        console.log(nextStep);
        setStep(nextStep);
      } catch (err) {
        console.error(`Error: form submission; ${err}`);
      }
    }
    getStep();
  };

  const mapCallbacksToComponents = (cb: any, idx: any) => {
    const name = cb?.payload?.input?.[0].name;
    switch (cb.getType()) {
      case "NameCallback":
        return <Text callback={cb} inputName={name} key="username" />;
      case "PasswordCallback":
        return <Password callback={cb} inputName={name} key="password" />;
      default:
        // If current callback is not supported, render a warning message
        console.log(idx);
        return <div></div>;
    }
  };

  if (!step) {
    return <Loader message="Checking your session ..." />;
  } else if (step.type === "Step") {
    return (
      <form className="cstm_form" onSubmit={handleFormSubmition}>
        {step.callbacks.map(mapCallbacksToComponents)}
        <button className="btn btn-primary w-100" type="submit">
          Sign In
        </button>
      </form>
    );
  } else if (step.type === "LoginSuccess") {
    return <div>Successfull</div>;
  } else {
    return <div>{step.payload.message}</div>;
  }
};

export default Form;
