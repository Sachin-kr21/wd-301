import React from 'react';
import { useNavigate } from "react-router-dom";

const Notfound = () => {
    const history = useNavigate();
    function handle(){

        
            history("/");
    
}
 return (
     <div className="mx-auto px-4">
       <div className="justify-between">
         <div className="items-center w-1/3">
           <h1>404 message</h1>
           <h1>PAGE NOT FOUND</h1>
           <button id="backToHomeButton" onClick={handle}>Home</button>
         </div>
       </div>
     </div>
 );
};

export default Notfound;