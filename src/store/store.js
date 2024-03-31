// write context api boilerplate
import { createContext } from "react";

export const StoreContext = createContext();

export const StoreProvider = StoreContext.Provider;

export const StoreConsumer = StoreContext.Consumer;

export default StoreContext;
