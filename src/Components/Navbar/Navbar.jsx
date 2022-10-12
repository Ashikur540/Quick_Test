import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-slate-100 shadow-xl px-10 max-w-full overflow-x-clip ">

                <div className="flex-1">
                    <Link to='/' href className="btn btn-ghost normal-case text-xl text-violet-600">Quick_Test ⌛</Link>
                </div>
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to="/topics">Topics</NavLink></li>
                        <li><NavLink to="/statistics">Statistics</NavLink></li>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>

                    </ul>
                </div>
                <div class="">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/topics">Topics</NavLink></li>
                            <li><NavLink to="/statistics">Statistics</NavLink></li>
                            <li><NavLink to="/blogs">Blogs</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Navbar;


