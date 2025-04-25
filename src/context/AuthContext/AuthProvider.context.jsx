import { useState } from 'react';
import { authContext as AuthContext } from './AuthContext.tools';

function AuthProvider({ children }) {
  const [showLogin, setShowLogin] = useState(false);

	const contextValue = {showLogin, setShowLogin};
	return (
		<AuthContext.Provider value={contextValue}>           
      {children}
    </AuthContext.Provider>
	);
}

export default AuthProvider;
