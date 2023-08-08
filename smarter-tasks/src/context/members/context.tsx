
//src/context/projects/context.tsx

// First, I'll import the createContext, useContext and useReducer from React

import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, MembersState, MembersActions } from "./reducer";
// import { API_ENDPOINT } from "../../config/constants";
const MembersStateContext = createContext<MembersState | undefined>(undefined);

export const useMembersState = () => useContext(MembersStateContext);

// This line defines a custom hook `useProjectsState`, that uses the `useContext` 
// hook to access the value stored in the `ProjectsStateContext`.
// The `ProjectsStateContext` is created using the createContext function 
// and is used to store the current `state` of the projects. 
// By using the `useProjectsState` hook in a component, 
// you can retrieve the current `state` of the projects without directly accessing 
// the context or passing down the state as a prop. This simplifies the code 
// and ensures that the state is always up to date.

export const useMembersDispatch = () => useContext(MembersDispatchContext);

// This line defines a custom hook `useProjectsDispatch` that also uses the 
//`useContext` hook to access the value stored in the `ProjectsDispatchContext`. 

// The `ProjectsDispatchContext` is created using the createContext function and is 
// used to store the `dispatch` function for updating the state of the projects.
// By using the `useProjectsDispatch` hook in a component, you can retrieve the 
// `dispatch` function without directly accessing the context or passing it down 
// as a prop. This allows you to dispatch actions to update the state of projects
//  from anywhere within your component tree that is wrapped with 
// the`ProjectsProvider`.

// Next, using createContext function, we will create a context for
// `Projects State` object. The shape of this new context object is 
// ProjectsState and here I've set the default value to undefined.

// Next, I'll define our ProjectsProvider component, and make this 
// ProjectsStateContext available using context Provider.

type MembersDispatch = React.Dispatch<MembersActions>;

const MembersDispatchContext = createContext<MembersDispatch | undefined>(undefined);
export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Next, I'll pass the `dispatch` object as value of this ProjectsDispatchContext.

  return (
    <MembersStateContext.Provider value={state}>
      <MembersDispatchContext.Provider value={dispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};
