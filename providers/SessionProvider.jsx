import { useState, useEffect, createContext, useCallback } from 'react';
import * as SecureStore from 'expo-secure-store';

export const SessionContext = createContext();

const session_storage_key = 'session';

export const SessionProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [session, setSession] = useState(null);

  const [loadingSession, setLoadingSession] = useState(true);

  const logIn = useCallback((name, email) => {
    const sessionData = { name, email };

    setSession(sessionData);
    setIsAuthenticated(true);

    SecureStore.setItem(session_storage_key, JSON.stringify(sessionData));
  }, [setSession, setIsAuthenticated]);

  const logOut = useCallback(() => {
    setIsAuthenticated(false);
    setSession(null);
    SecureStore.deleteItemAsync(session_storage_key);
  }, [setSession, setIsAuthenticated]);

  const validateSession = useCallback(async () => {
    if (isAuthenticated) return setLoadingSession(false);
    setLoadingSession(true);

    const currentSession = SecureStore.getItem(session_storage_key);
    if (!currentSession) return setLoadingSession(false);

    const sessionData = JSON.parse(currentSession);
    console.log(currentSession)
    logIn(sessionData.name, sessionData.email);

    setLoadingSession(false);
  }, []);

  useEffect(() => {
    validateSession();
  }, []);

  return (
    <SessionContext.Provider
      value={{
        isAuthenticated,
        session,
        loadingSession,
        logIn,
        logOut
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
