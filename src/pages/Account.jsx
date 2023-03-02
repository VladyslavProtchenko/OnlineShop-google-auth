import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Account = () => {
    const user = useSelector(state => state.user);

    return user.email?(
        <div className={box}>
            
                <div className={photo}>PHOTO</div>
                <div className={infoSection}>
                    <h2 className={profileHeader}>{user.name}</h2>
                    <p className={profileMail}>{user.email}</p>
                    <p className={cash}>$ 24 750 000</p>
                </div>
        
        </div>):(<Navigate replace to='/login'/>)
};

export default Account;

//style
const photo = ' bg-zinc-700 w-24 h-24 p-16 m-12 rounded-full self-start items-center justify-center flex font-bold text-white'
const infoSection = 'pr-24 mt-16 w-3/5'
const profileHeader = 'text-3xl'
const profileMail = 'ml-4 italic text-zinc-500 mb-4'
const cash = ' italic text-teal-600'
const box = 'max-w-5xl w-full flex justify-center  flex-auto'