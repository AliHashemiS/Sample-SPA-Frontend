import React, { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/users');
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data.users);
                } else {
                    console.error('Error fetching users:', response.status);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;