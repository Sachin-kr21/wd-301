// src/context/projects/context.tsx

// First, I'll import the createContext, useContext and useReducer from React

import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, ProjectsState, ProjectsActions } from "./reducer";
import { API_ENDPOINT } from "../../config/constants";
const ProjectsStateContext = createContext<ProjectsState | undefined>(undefined);

export const useProjectsState = () => useContext(ProjectsStateContext);

// This line defines a custom hook `useProjectsState`, that uses the `useContext` 
// hook to access the value stored in the `ProjectsStateContext`.
// The `ProjectsStateContext` is created using the createContext function 
// and is used to store the current `state` of the projects. 
// By using the `useProjectsState` hook in a component, 
// you can retrieve the current `state` of the projects without directly accessing 
// the context or passing down the state as a prop. This simplifies the code 
// and ensures that the state is always up to date.

export const useProjectsDispatch = () => useContext(ProjectsDispatchContext);

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

type ProjectsDispatch = React.Dispatch<ProjectsActions>;

const ProjectsDispatchContext = createContext<ProjectsDispatch | undefined>(undefined);
export const ProjectsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Next, I'll pass the `dispatch` object as value of this ProjectsDispatchContext.

  return (
    <ProjectsStateContext.Provider value={state}>
      <ProjectsDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectsDispatchContext.Provider>
    </ProjectsStateContext.Provider>
  );
};

export const addProject = async (dispatch: any, args: any) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },

      // Next, I'll pass the `args` here
      body: JSON.stringify(args), 
    });
    if (!response.ok) {
      throw new Error('Failed to create project');
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message }
    }

    // And if everything goes well with the API call, we will dispatch an action, 
    // with `type` set to `ADD_PROJECT_SUCCESS` and in `payload` we will send the 
    // new project `data`.
    dispatch({ type: 'ADD_PROJECT_SUCCESS', payload: data });

    // Next, I'll return a status called "ok", with value `true`
    // as everything went well.
    return { ok: true }
  } catch (error) {
    console.error('Operation failed:', error);
  // Dialogue 5: And for error I'll return status called "ok", with value `false`.
    return { ok: false, error }
  }
};
