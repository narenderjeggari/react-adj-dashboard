import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loader from "shared/components/Loader/Loader";
import { useAuthValidation } from "shared/components/authentication/hooks/useAuthValidation";
import { AppContext } from "shared/components/authentication/hooks/useGlobalStateMgmt";

type ProtectedRouteProps = {
    children: any;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
    // Get "global" state from Context API
    const [{ isAuthenticated }, { setAuthentication }] = useContext(AppContext) as any;
    // Custom hook for validating user's access token
    const [{ isValid }] = useAuthValidation(isAuthenticated, setAuthentication);
  
    switch (isValid) {
      case 'valid':
        // Access token has been confirmed to be valid
        return props.children;
      case 'invalid':
        // Access token has been confirmed to be invalid
        return <Navigate to="/login" />;
      default:
        // State is 'unknown', so we are waiting on token validation
        return <Loader message="Verifying access ... " />;
    }
  }

  export default ProtectedRoute;