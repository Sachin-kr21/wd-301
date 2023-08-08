// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import { fetchMembers } from '../../context/members/actions';
import { useMembersDispatch } from '../../context/members/context';
import MemberListItems from './MemberListItems';
// import MemberListItems from './MemberListItems';

// interface Member {
//   id: number;
//   name: string;
// }
// // interface State {
// //   projects: Member[];
// //   isLoading: boolean;
// // }
// // interface Action {
// //   type: string;
// //   payload?: any;
// // }



const MemberList: React.FC = () => {

  // commenting out usestates

  // const [projects, setMembers] = useState<Member[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatchMembers = useMembersDispatch();

  

  useEffect(() => {
    // Fetch the list of projects here

    fetchMembers(dispatchMembers);
  }, [dispatchMembers]);

  //fetchMembers function for useEffect

  // const fetchMembers = async () => {
  //   const token = localStorage.getItem("authToken") ?? "";  
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch(`${API_ENDPOINT}/projects`, {
  //       method: 'GET',
  //       headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
  //     });
  //     const data = await response.json();
  //     setMembers(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log('Error fetching projects:', error);
  //     setIsLoading(false);
  //   }
  // };

  

  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      {/*To keep this file clean, I'll move all the logic to access the projects 
       from our app-state, to a new component MemberListItems */}
      <MemberListItems />
    </div>
  );
};
export default MemberList;