import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';
import useAllPayment from '../hooks/useAllPayment';
import axios from 'axios';

const Layouts = () => {


    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Layouts;