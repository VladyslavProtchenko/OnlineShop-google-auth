import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addFavorite } from '../redux/slices/marketSlice';
import GoodsCard from './components/GoodsCard';
import { marketServices } from './services/marketServices';
import MarketNav from './UI/MarketNav';



const Market = () => {
    const goods = useSelector(state => state.market)
    const user = useSelector(state => state.user)
    const [category, setCategory] = useState('art')
    const [searchFilter, setSearchFilter] = useState('')
    const [price, setPrice] = useState(null)
    const [rate, setRate] = useState(null)
    const [isAuth, setIsAuth] = useState(true)


    const dispatch = useDispatch()
    useEffect(()=>{},[category])

    function addToCart(item){
        if(!user.name) { setIsAuth(false) }
        dispatch(addFavorite(item))
    }

    return (
        <div className='container max-w-5xl w-full flex flex-col items-center flex-auto'>
            <MarketNav setCategory={setCategory}/>
            <div className={mainHeader}>{category}</div>
            <section className={filters}>
                <div>
                    <h2 className={searchHeader}>Searching</h2>
                    <input 
                        type="text" 
                        className={searchInput}
                        onChange={(e)=>setSearchFilter(e.target.value)}
                        value={searchFilter}
                    />
                </div>

                <div className={ratingFilter} onClick={()=>setPrice(prev=> prev = !prev)}>
                    <div className='flex items-center'>Price<div className={price?arrUp:arrDown}></div></div>
                </div>
                <div 
                    className={ratingFilter} 
                    onClick={()=>{
                        setRate(prev=> prev = !prev) 
                        setPrice(null)}}
                        >
                    <div className='flex items-center'>Rating<div className={rate?arrUp:arrDown}></div></div>
                </div>
                
            </section>
            <section className={market}>
                {!isAuth && <h1 className={login}>You need make login before shopping: <NavLink to='/login' className={loginLink}> login</NavLink></h1>}
                {marketServices.filter(goods[category],rate,price).filter(item=> item.name.includes(searchFilter)).map(item =>
                    <GoodsCard item={item} add={addToCart}/>
                )}
            </section>
        </div>
    );
};

export default Market;


//style
const market = 'flex flex-wrap bg-white justify-center py-12 w-full'
const filters = ' flex w-full bg-white px-6 py-6 justify-start space-x-12 items-center'
const searchInput = 'border rounded border-zinc-700 outline-none px-4 py-1'
const searchHeader = 'text-sm text-zinc-400 ml-6 mb-1'
const arrUp = 'm-2 w-2 h-2 border-t border-l border-black rotate-45'
const arrDown = 'm-2 w-2 h-2 border-t border-l border-black rotate-[225deg]'
const ratingFilter ='self-end cursor-pointer'

const mainHeader = 'w-full bg-white text-start text-6xl px-12 pt-8 pl-24'
const login = 'bg-white text-rose-500 bg-white w-full text-start px-12 mb-4'
const loginLink = 'text-black hover:underline'

