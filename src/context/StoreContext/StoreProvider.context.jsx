import { storeContext as StoreContext } from './StoreContext.tools';

function StoreProvider({ children }) {
  const contextValue = {};

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider;
