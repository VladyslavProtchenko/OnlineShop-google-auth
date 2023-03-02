import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { removeFavorite } from '../redux/slices/marketSlice';

const Cart = () => {
    let cart = JSON.parse(localStorage.getItem('cart') ?? '[]')
    const {user} = useSelector(state => state);
    const [count, setCount] = useState(0);

    const dispatch = useDispatch()

    useEffect(()=>{
        setCount(0)
        cart.forEach(item => setCount(prev=> prev + item.price))
    },[cart])

    
    return user.email?(
        <div className={box}>
            <section className={goods}>
                {cart.map(item=>(
                    <div className={mainCard}>
                        <img className={image} src={imgSrc} alt="pics" />
                        <article className={cardInfo}>
                            <h3 className={cardName}>{item.name}</h3>
                            <p className={cardDesc}>{item.description}</p>
                            <p className={cardPrice}> $ {item.price}</p>
                        </article>
                        
                        <button className={deleteBtn} onClick={()=>dispatch(removeFavorite(item))}>Delete</button>
                    </div>
                ))}

            </section>
            <section className={menu}>
                    
                    <h1 className='mb-6 self-start uppercase'>Your Cart:</h1>
                    <div className='bg-black h-[0.5px] w-full mb-5'></div>
                    <ul className='flex flex-col w-full px-2 min-h-[300px]'>
                    {cart.map(item=>(
                        <li className={sbItem}>
                            <h3 className={sbName}>{item.name}:</h3>
                            <p className={sbPrice}>$ {item.price}</p>
                        </li>
                    ))}
                    </ul>
                    <div className='bg-black h-[0.5px] w-full my-5'></div>

                    <h1 className={totalPrice}>total price: $ {count}</h1>
                    <button className={buyBtn} onClick={()=>alert('it okey bro, its not real shop')}>Buy </button>
            </section>
        </div>):(<Navigate replace to='/login'/>)
};

export default Cart;


//style
const imgSrc = 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2845&q=80'


const box = ' flex flex-auto w-full'
const menu = 'flex  bg-zinc-300 w-1/5 flex flex-col items-center px-4 py-6'
const goods = 'flex w-4/5 justify-center flex-wrap'

const sbItem = 'flex w-full justify-start space-x-4 items-center'
const sbName = 'uppercase font-normal'
const sbPrice = 'text-teal-600 text-sm'
const totalPrice = 'self-start text-rose-600'
const buyBtn = 'self-start my-4 px-6 py-2 bg-rose-600 rounded text-white active:bg-rose-400'

const cardInfo = 'flex flex-col w-full p-12'
const mainCard= 'w-4/5 h-min flex relative overflow-hidden flex- pr-12  m-2 justify-between shadow rounded-xl'
const image = 'w-2/5'
const cardName = 'uppercase font-semibold '
const cardDesc = ' text-sm self-center text-zinc-500 my-12'
const cardPrice = 'text-teal-500'
const deleteBtn = 'cursor-pointer absolute text-xs right-12 top-8'