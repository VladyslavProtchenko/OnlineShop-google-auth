const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: null,
        email: null,
        token: null,
        id:null
    },
    reducers: {
        newUser(state,action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.name = null
            state.email = null;
            state.token = null;
            state.id = null;
        }
    }
})

export const { newUser, removeUser } = userSlice.actions

export default userSlice.reducer;




