import { useReducer } from 'react';
import AuthContext from './Context';
import reducer, { initState } from './reducer';

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
