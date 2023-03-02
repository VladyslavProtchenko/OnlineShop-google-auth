import React from 'react';
import { NavLink } from 'react-router-dom';

//styles 
const container = 'flex w-screen justify-center items-center pb-6 bg-zinc-800 text-white'
const nav = 'flex max-w-3xl w-full justify-between items-center '
const navMenu = 'flex h-auto'
const menuItem = 'text-sm px-5 py-3 text-zinc-500 hover:text-white'


const Header = () => {
    return (
        <div className={container}>
            <nav className={nav}>
                <ul className={navMenu}>
                    <NavLink className={menuItem}>Logo</NavLink>
                    <NavLink className={menuItem}>Home</NavLink>
                    <NavLink className={menuItem}>Shop</NavLink>
                </ul>

                <ul className={navMenu}>
                    <li className={menuItem}>Thank you for your attention </li>                    
                    <NavLink className={menuItem}>cart</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;