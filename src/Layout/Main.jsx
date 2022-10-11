import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../src/Components/Navbar/Navbar'
const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;