// src/context/projects/actions.ts
import { API_ENDPOINT } from '../../config/constants';
export const fetchMembers = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";
  
  try {
    dispatch({ type: "FETCH_MEMBERS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    const data = await response.json();
    console.log(data);
    dispatch({ type: "FETCH_MEMBERS_SUCCESS", payload: data
  });
  } catch (error) {
    console.log('Error fetching members:', error);
    dispatch({ type: "FETCH_MEMBERS_FAILURE", payload: 'Unable to load members' });
  }
};

export const addMember = async (dispatch: any, args: any) => {
    try {
      const token = localStorage.getItem("authToken") ?? "";
      const response = await fetch(`${API_ENDPOINT}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
  
        // Next, I'll pass the `args` here
        body: JSON.stringify(args), 
      });
      if (!response.ok) {
        throw new Error('Failed to create member');
      }
      const data = await response.json();
      if (data.errors && data.errors.length > 0) {
        return { ok: false, error: data.errors[0].message }
      }
  
      // And if everything goes well with the API call, we will dispatch an action, 
      // with `type` set to `ADD_PROJECT_SUCCESS` and in `payload` we will send the 
      // new project `data`.
      console.log(data.user,"////1");
      dispatch({ type: 'ADD_MEMBERS_SUCCESS', payload: data.user });
      // Next, I'll return a status called "ok", with value `true`
      // as everything went well.
      return { ok: true }
    } catch (error) {
      console.error('Operation failed:', error);
    // Dialogue 5: And for error I'll return status called "ok", with value `false`.
      return { ok: false, error }
    }
  };

  export const deleteMember = async (dispatch: any, id: any) => {
    try {
      const token = localStorage.getItem("authToken") ?? "";
      const response = await fetch(`${API_ENDPOINT}/users/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
  
        // Next, I'll pass the `args` here
        // body: JSON.stringify(args), 
      });
      if (!response.ok) {
        throw new Error('Failed to delete member');
      }
      const data = await response.json();
      if (data.errors && data.errors.length > 0) {
        return { ok: false, error: data.errors[0].message }
      }
  
      // And if everything goes well with the API call, we will dispatch an action, 
      // with `type` set to `ADD_PROJECT_SUCCESS` and in `payload` we will send the 
      // new project `data`.
      // console.log(data.user,"////1");
      dispatch({ type: 'DELETE_MEMBERS_SUCCESS', payload: id });
      // Next, I'll return a status called "ok", with value `true`
      // as everything went well.
      return { ok: true }
    } catch (error) {
      console.error('Operation failed:', error);
    // Dialogue 5: And for error I'll return status called "ok", with value `false`.
      return { ok: false, error }
    }
  };