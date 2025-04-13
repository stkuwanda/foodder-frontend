import { createContext, useContext } from 'react';

const storeContext = createContext(); // createContext(null);
const useStoreContext = () => useContext(storeContext);

export { storeContext, useStoreContext };
