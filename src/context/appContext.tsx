import { createContext, useContext, useReducer, ReactNode } from "react";
import { AppState } from "./types";
import { AppActions } from "./actions";
import { AppReducer } from "./reducer";

interface AppContext {
  state: AppState;
  actions?: ReturnType<typeof AppActions>;
}

const initialState: AppState = {
  selectedImage: { url: "", local: null },
  textObject: {
    textTop: "",
    textBottom: "",
    fontSizeTop: "16",
    fontSizeBottom: "16",
    fontColor: "white",
    font: "Arial",
  },
};

const appContext = createContext<AppContext>({ state: initialState });

appContext.displayName = "appContext";

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const actions = AppActions(dispatch);

  return (
    <appContext.Provider
      value={{
        state,
        actions,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useStore = (): AppContext => {
  const { state, actions } = useContext(appContext);
  return {
    state,
    actions,
  };
};
