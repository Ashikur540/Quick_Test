import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-slate-100 shadow-xl px-10 ">
                <div className="flex-1">
                    <Link to='/' href className="btn btn-ghost normal-case text-xl text-violet-600">Quick_Test ⌛</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0 space-x-4">
                        <li><NavLink to="/topics">Topics</NavLink></li>
                        <li><NavLink to="/statistics">Statistics</NavLink></li>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;