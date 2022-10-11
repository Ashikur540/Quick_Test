import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' href className="btn btn-ghost normal-case text-xl text-violet-600">QuizZly !</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
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