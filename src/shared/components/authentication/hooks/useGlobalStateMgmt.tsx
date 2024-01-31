import { FRUser } from '@forgerock/javascript-sdk';
import React, { useState } from 'react';

type GlobalStateProps = {
    email: string;
    isAuthenticated: boolean;
    username: string;
}

export function useGlobalStateMgmt(props: GlobalStateProps) {

  const [authenticated, setAuthentication] = useState<boolean>(props.isAuthenticated || false);
  const [mail, setEmail] = useState<string>(props.email || '');
  const [name, setUser] = useState<string>(props.username || '');

  async function setAuthenticationWrapper(value: boolean) {
    if (value === false) {
      /** *********************************************************************
       * SDK INTEGRATION POINT
       * Summary: Logout, end session and revoke tokens
       * ----------------------------------------------------------------------
       * Details: Since this method is a global method via the Context API,
       * any part of the application can log a user out. This is helpful when
       * APIs are called and we get a 401 response.
       ********************************************************************* */
      try {
        await FRUser.logout();
      } catch (err) {
        console.error(`Error: logout did not successfully complete; ${err}`);
      }
    }
    setAuthentication(value);
  }

  /**
   * @function setEmailWrapper - A wrapper for storing authentication in sessionStorage
   * @param {string} value - current user's email
   * @returns {void}
   */
  function setEmailWrapper(value: string) {
    window.sessionStorage.setItem('sdk_email', `${value}`);
    setEmail(value);
  }

  /**
   * @function setUserWrapper - A wrapper for storing authentication in sessionStorage
   * @param {string} value - current user's username
   * @returns {void}
   */
  function setUserWrapper(value: string) {
    window.sessionStorage.setItem('sdk_username', `${value}`);
    setUser(value);
  }

  

  /**
   * returns an array with state object as index zero and setters as index one
   */
  return [
    {
      isAuthenticated: authenticated,
      email: mail,
      username: name,
    },
    {
      setAuthentication: setAuthenticationWrapper,
      setEmail: setEmailWrapper,
      setUser: setUserWrapper,
    },
  ];
}

/**
 * @constant AppContext - Creates React Context API
 * This provides the capability to set a global state in React
 * without having to pass the state as props through parent-child components.
 */
export const AppContext = React.createContext([{}, {}]);