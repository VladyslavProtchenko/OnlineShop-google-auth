import React, { useState } from 'react';



const GoodsCard = ({item, add}) => {
    const user = JSON.parse(localStorage.getItem('user')??'[]');

    const [isAuth, setIsAuth] = useState(true)
    function auth(){
        if(!user.name) setIsAuth(false)
    }

    return (
            <div className={isAuth?goodsCard:nonAuth} key={item.price}>
                <img src={imgSrc} className={image} alt="pic" />
                <article className={cardInfo}>
                    <h1 className={headerCard}>{item.name}</h1>
                    <hr />
                    <p className={descCard}>{item.description}</p>
                    <div className='flex items-center justify-between mb-6'>
                        <p className={priceCard}>$ {item.price}</p>
                        <p className={rateCard}>&#9733; {item.rating}</p>
                    </div>
                    <button 
                        className={addToCart} 
                        onClick={
                            ()=>{
                                add(item)
                                auth()
                            }
                            }>add
                    </button>

                </article>
            </div>

    );
};

export default GoodsCard;

//style
const imgSrc = 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2845&q=80'
const image ='w-3/5 h-[300px]'

const goodsCard = 'overflow-hidden max-w-[48%] w-[48%]  bg-white shadow hover:scale-[1.01] m-1 relative rounded-xl  text-start flex'
const nonAuth = goodsCard +' border border-rose-500'

const cardInfo = 'flex flex-col px-8 pl-12 w-full'
const headerCard = 'text-zinc-700 uppercase font-bold text-md my-4 text'
const descCard = 'my-6 text-center text-zinc-400 text-sm mb-auto'
const priceCard = 'text-teal-500'
const rateCard = 'text-xs text-zinc-700 cursor-pointer'
const addToCart = 'self-start px-6 py-1 mb-5 rounded bg-rose-500 text-white active:bg-rose-700 text-xs'
