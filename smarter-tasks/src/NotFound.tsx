import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const history = useNavigate();
    function handle(){

        
            history("/");
    
}
 return (
     <div className="mx-auto px-4">
       <div className="flex justify-between">
         <div className="flex items-center w-1/3">
           <h1>404 message</h1>
           <h1>PAGE NOT FOUND</h1>
           <button id="backToHomeButton" onClick={handle}>Home</button>
         </div>
       </div>
     </div>
 );
};

export default NotFound;