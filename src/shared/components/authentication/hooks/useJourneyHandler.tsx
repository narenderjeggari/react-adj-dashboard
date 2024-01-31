import { FRAuth, TokenManager, UserManager } from '@forgerock/javascript-sdk';
import { useEffect, useState } from 'react';

type JourneyHandlerProps = {
    action: {
        type: string
    };
    form: any;
    resumeUrl: string;
}

export default function useJourneyHandler(props: JourneyHandlerProps) {
  
  const [formFailureMessage] = useState(null);
  const [renderStep, setRenderStep] = useState(null);
  const [submissionStep, setSubmissionStep] = useState(null);
  const [stepCount, setStepCount] = useState(0);
  const [submittingForm, setSubmittingForm] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    async function getOAuth() {
      try {
        await TokenManager.getTokens({ forceRenew: true });
      } catch (err) {
        console.info(`Error: get tokens; ${err}`);
      }
      
      try {
        const user = await UserManager.getCurrentUser() as any;
        setUser(user);
      } catch (err) {
        console.error(`Error: get current user; ${err}`);
        setUser(null);
      }
    }

    async function getStep(prev: any) {
      const previousStage = prev?.getStage && prev.getStage();
      const previousCallbacks = prev?.callbacks;
      const previousPayload = prev?.payload;

      let nextStep: any;
      try {
        if (props.resumeUrl) {
          nextStep = await FRAuth.resume(props.resumeUrl);
        } else {
          nextStep = await FRAuth.next(prev, { tree: props.form.tree });
        }
        setStepCount((current) => current + 1);
      } catch (err) {
        console.error(`Error: failure in next step request; ${err}`);

        /**
         * Setup an object to display failure message
         */
        nextStep = {
          type: 'LoginFailure',
          payload: {
            message: 'Unknown request failure',
          },
        };
      }

      if (nextStep.type === 'LoginSuccess') {
        setStepCount(0);

        getOAuth();
      } else if (nextStep.type === 'LoginFailure') {
        // setFormFailureMessage(htmlDecode(nextStep.payload.message));

        let newStep: any;
        try {
          newStep = await FRAuth.next(undefined, { tree: props.form.tree });
        } catch (err) {
          console.error(`Error: failure in new step request; ${err}`);

          newStep = {
            type: 'LoginFailure',
            payload: {
              message: 'Unknown request failure',
            },
          };
        }

        if (stepCount === 1 && newStep.getStage() === previousStage) {
          newStep.callbacks = previousCallbacks;
          newStep.payload = {
            ...previousPayload,
            authId: newStep.payload.authId,
          };
        }

        setRenderStep(newStep);
        setSubmittingForm(false);
      } else {
        setRenderStep(nextStep);
        setSubmittingForm(false);
      }
    }

    getStep(submissionStep);
  }, [props.form.tree, props.resumeUrl, stepCount, submissionStep]);

  return [
    {
      formFailureMessage,
      renderStep,
      submittingForm,
      user,
    },
    {
      setSubmissionStep,
      setSubmittingForm,
    },
  ];
}
