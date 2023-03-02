import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { removeUser } from '../../redux/slices/userSlice';


const Header = () => {
    const {email} = useSelector(state => state.user);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function signOut(){
        dispatch(removeUser())
        navigate('/login')
        localStorage.clear()
    }

    return (
        <div className={container}>
            <nav className={nav}>
                <ul className={navMenu}>
                    <NavLink to='/' className={logo}>art</NavLink>
                    <NavLink to='/' className={menuItem}>home</NavLink>
                    <NavLink to='/market' className={menuItem}>shop</NavLink>
                </ul>

                <ul className={navMenu}>
                    {email && <NavLink to='/account' className={menuItem}>account</NavLink>}
                    {email && <NavLink to='/cart' className={menuItem}>cart</NavLink>}

                    {email && <button  className={btn2} onClick={signOut}>signout</button>}

                    {!email && <NavLink to='/login' className={btn2}>sign in</NavLink>}
                    {!email && <NavLink to='/registration' className={btn}>sign up</NavLink>}

                </ul>
            </nav>
        </div>
    );
};

export default Header;

//styles
const container = 'shadow z-40 flex w-screen justify-center items-center pt-2 pb-2 bg-rose-600 text-white'
const nav = 'flex max-w-5xl w-full justify-between items-center '
const navMenu = 'flex h-auto'
const menuItem = 'px-3 py-3 hover:underline'
const btn = 'px-3 mt-1 h-min py-1 border-2 border-zinc-800 mr-3 font-bold bg-zinc-800 text-white rounded-full flex items-center'
const btn2 = 'px-3  mt-1 h-min py-1 border-2 border-zinc-800 mr-3 ml-6 font-bold text-zinc-800 rounded-full flex items-center'
const logo = 'text-3xl px-5 mx-6 italic tracking-widest text-white'
