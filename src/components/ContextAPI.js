import { createContext, useReducer } from "react";

export const SpeedContext = createContext();

export default function ContextProvider({ children }) {
  const reducer = (prevState, action) => {
    switch (action.type) {
      case "accelerate":
        console.log("button increase pressed");
        return prevState + 5;

      case "brake":
        if (prevState <= 0) {
          return 0;
        } else {
          return prevState - 5;
        }

      //   case "switchOnOff":
      //     return 0;

      default:
        return 0;
    }
  };

  const [state, dispatchState] = useReducer(reducer, 0);

  return (
    <SpeedContext.Provider value={{ state, dispatchState }}>
      {children}
    </SpeedContext.Provider>
  );
}
