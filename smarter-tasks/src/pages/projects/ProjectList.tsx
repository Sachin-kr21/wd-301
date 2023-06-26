// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import { fetchProjects } from '../../context/projects/actions';
import { useProjectsDispatch } from '../../context/projects/context';
import ProjectListItems from './ProjectListItems';

// interface Project {
//   id: number;
//   name: string;
// }
// // interface State {
// //   projects: Project[];
// //   isLoading: boolean;
// // }
// // interface Action {
// //   type: string;
// //   payload?: any;
// // }



const ProjectList: React.FC = () => {

  // commenting out usestates

  // const [projects, setProjects] = useState<Project[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatchProjects = useProjectsDispatch();

  

  useEffect(() => {
    // Fetch the list of projects here

    fetchProjects(dispatchProjects);
  }, [dispatchProjects]);

  //fetchProjects function for useEffect

  // const fetchProjects = async () => {
  //   const token = localStorage.getItem("authToken") ?? "";  
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch(`${API_ENDPOINT}/projects`, {
  //       method: 'GET',
  //       headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
  //     });
  //     const data = await response.json();
  //     setProjects(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log('Error fetching projects:', error);
  //     setIsLoading(false);
  //   }
  // };

  

  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      {/*To keep this file clean, I'll move all the logic to access the projects 
       from our app-state, to a new component ProjectListItems */}
      <ProjectListItems />
    </div>
  );
};
export default ProjectList;