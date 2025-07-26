    import React, { useEffect, useState } from 'react';
    import axios from 'axios';

    const UserData = () => {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi
    
        const [data, setData] = useState([]);
        const [error, setError] = useState(null);

        
        useEffect(() => {
            
            axios.get(`${app}user`)
                .then((response) => {
                    setData(response.data); 
                })
                .catch((error) => {
                    
                    setError(error.message);
                });
        }, []);

        

        return (
            <div>
                <h1>User Data</h1>
                {data.length > 0 ? (
                    <ul>
                        {data.map((user, index) => (
                            <li key={index}>
                                <p><strong>Name:</strong> {user.name}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );
    };1 

    export default UserData;
