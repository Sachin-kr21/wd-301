import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    let user = localStorage.getItem('userData')
    let userData;
    const navigate = useNavigate();
    if (user){
    userData = JSON.parse(user);
    console.log(userData);
    
    }
    function clearSession(): void {
            localStorage.removeItem('userData');
            localStorage.removeItem('authToken');

            navigate("/signin");

    }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">{userData.name}</h1>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">{userData.email}</h1>
        <button id="logout-link" onClick={clearSession} >Log Out</button>
    </div>
  );
}

export default Dashboard;