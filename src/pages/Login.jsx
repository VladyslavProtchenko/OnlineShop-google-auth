import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getAuth as getAuthGoogle, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { loginServices } from './services/loginServices';


const Login = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuthGoogle();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const nav = useNavigate()
    const handleLoginGoogle = async () => {signInWithRedirect(auth, provider)}

    loginServices.getGoogleAuth(auth,dispatch,nav)

    return (
        <div className='max-w-5xl container flex flex-col items-center flex-auto justify-center'>
            
                <form onSubmit={(e)=>e.preventDefault()} className='flex flex-col w-2/6 '>
                    <h1 className={header}>Login in to site</h1>
                    <h2 className={headers}>email</h2>
                    <input className={input} value={email} type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
                    <h2 className={headers}>password</h2>
                    <input className={input} value={password} type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>

                    <div className=' mt-12 flex items-center justify-between'>
                        <button className={button} onClick={()=>loginServices.handleLogin(email,password,dispatch, nav)}>Sign Up</button>
                        <NavLink to='/registration' className={buttonLink}>Sign in</NavLink>
                    </div>
                    <div className={switcher} onClick={handleLoginGoogle}>Sing In with Google</div>
                </form>
        </div>
    );
};

export default Login;

//styles 
const headers ='tracking-widest text-zinc-600 text-xs'
const header ='uppercase mb-8 text-2xl font-semibold'
const input ='outline-none px-4 py-3 rounded-xl mb-4 tracking-wider text-zinc-700 focus:border-rose-500 border border-white'
const button = 'px-4 py-3 bg-rose-500 rounded-xl text-white active:bg-rose-700 w-2/6' 
const buttonLink = 'self-center hover:text-rose-500 mr-12'
const switcher ='cursor-pointer text-zinc-500 self-center mt-7 hover:underline '
