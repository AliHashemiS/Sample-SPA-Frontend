import React from 'react';

const Navbar = ({ username, handleLogout }) => {
    return (
        <nav>
            <div className="navbar-brand">Welcome, {username}!</div>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;