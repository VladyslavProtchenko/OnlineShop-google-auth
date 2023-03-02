import { createSlice } from "@reduxjs/toolkit";
import {db} from '../DB'

const marketSlice = createSlice({
    name: 'market',
    initialState: {
        ...db,
        favorite: [
            ...JSON.parse(localStorage.getItem('cart')??'[]')
        ],
    },
    reducers: {

        addFavorite(state,action){
            state.favorite.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state.favorite))
        },

        removeFavorite(state,action){       
            let check = true

            state.favorite = state.favorite.filter(item =>{
                if(item.name !== action.payload.name && item.price !== action.payload.price) {
                    return true
                } else {
                    if(check) { 
                        check = false
                        return false
                    }
                    return true
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.favorite))
        },
    }
})

export const {addFavorite, removeFavorite} = marketSlice.actions

export default marketSlice.reducer;