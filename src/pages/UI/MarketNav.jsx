import React from 'react';

//style
const box = ' flex flex-col bg-zinc-100 w-screen justify-center items-center py-2 shadow z-10'
const nav = 'w-full max-w-5xl justify-center flex'
const item ='text-zinc-400 hover:text-zinc-900 cursor-pointer'

const MarketNav = ({setCategory}) => {


    return (
        <div className={box}>
            <nav className={nav}>
                <ul className='flex w-full justify-around'>
                    <li onClick={(e)=>setCategory('art')} className={item}>art</li>
                    <li onClick={(e)=>setCategory('sculpture')} className={item}>sculpture</li>
                    <li onClick={(e)=>setCategory('origami')} className={item}>origami</li>
                    <li onClick={(e)=>setCategory('music')} className={item}>music</li>
                    <li onClick={(e)=>setCategory('voodoo')} className={item}>voodoo</li>
                </ul>
            </nav>
        </div>
    );
};

export default MarketNav;