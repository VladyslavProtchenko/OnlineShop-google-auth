import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { newUser } from '../../redux/slices/userSlice';
import Footer from './Footer';
import Header from './Header';


const Layout = () => {
    const dispatch = useDispatch()
    const user = localStorage.getItem('user')
    if(user) dispatch(newUser(JSON.parse(user)))

    return (
        <div className=' min-h-screen flex flex-col items-center bg-zinc-50'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;