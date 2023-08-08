// src/pages/projects/ProjectListItems.tsx
import React from "react";
import { deleteMember } from "../../context/members/actions";

// First, I'll import the useProjectsState custom hook to access projects state.
import { useMembersDispatch, useMembersState } from "../../context/members/context";
export default function MemberListItems() {

  // I'll define a new constant called `state`, to call the useProjectsState() hook, 
  // and get access to projects state.
  let state: any = useMembersState();
  // console.log("///////////////",state);
  const dispatchMembers = useMembersDispatch();

  // Next, I'll destructure the state object to gain access to projects, 
  // isLoading, isError and errorMessage property.
  const { members, isLoading, isError, errorMessage } = state
  // console.log("///",members);

  // If `isLoading` is true, and there are no projects, in that case, 
  // I'll show a loading text
  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  
// Next, if there is an error, I'll show the error message.
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  

  function removeMember(id: any) : void {
    const response = deleteMember(dispatchMembers, id);
    return
    ;
    // throw new Error("Function not implemented.");
  }

  // And finally I'll iterate over the projects object to show the 
  // individual projects card.
  return (
    <>
      {members.map((member: any) => (
        <div key={member.id} className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 member">
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.email}</h5>
          <button type="button" className="float-right"
          onClick={()=>removeMember(member.id)}
          ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
        </button>
        </div>
      ))}        
    </>
  );
}