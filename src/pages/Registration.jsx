import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getAuth as getAuthGoogle, signInWithRedirect,GoogleAuthProvider } from "firebase/auth";

import { services } from './services/registrationServices';


const Registration = () => {
    console.log(localStorage.getItem('token'));
    const provider = new GoogleAuthProvider();
    const auth = getAuthGoogle();
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleLoginGoogle = async () => {signInWithRedirect(auth, provider)}
    services.getGoogleAuth(auth,dispatch,navigate);

    return (
        <div className={box}>
            <form 
                onSubmit={(e)=>e.preventDefault()} 
                className='flex flex-col w-2/6 '
            >
                <h1 
                    className={header}
                >
                        Registration in to site
                </h1>
                <h2 className={headers}>email</h2>
                <input className={input} value={email} type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
                <h2 className={headers}>name</h2>
                <input className={input} value={name} type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
                <h2 className={headers}>password</h2>
                <input className={input} value={password} type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                <button 
                    className={button}
                    onClick={()=>services.handleLogin(email,password,name,dispatch,navigate)}
                >Sign Up</button>
                <NavLink to='/login' className={buttonLink}>Sign In</NavLink>
                <div className={switcher} onClick={handleLoginGoogle}>Sing Up with Google</div>

            </form>
        </div>
    );
};

export default Registration;

//styles
const box = 'container max-w-5xl flex flex-col items-center flex-auto justify-center'
const headers ='tracking-widest text-zinc-600 text-xs'
const header ='uppercase mb-8 text-2xl font-semibold'
const input ='outline-none px-4 py-3 rounded-xl mb-4 tracking-wider text-zinc-700 focus:border-rose-500 border border-white'
const button = 'px-4 py-3 bg-rose-500 rounded-xl text-white active:bg-rose-700 mb-4' 
const buttonLink = 'self-center hover:text-rose-500'
const switcher ='cursor-pointer text-zinc-500 self-center mt-7 hover:underline '