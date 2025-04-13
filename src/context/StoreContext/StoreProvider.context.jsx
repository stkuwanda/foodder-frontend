import { storeContext as StoreContext } from './StoreContext.tools';
import { food_list } from '../../assets/assets';

function StoreProvider({ children }) {
  const contextValue = { food_list };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider;
