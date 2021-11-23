import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return(
        <div className="class-Menu">
        <Link to="/">Home</Link>
        <Link to="/SingIp">SingIp</Link>
        <Link to="/SingUp">SingUp</Link>
        </div>
    )
}

export default Menu;