import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { newUser } from "../../redux/slices/userSlice";
import { getAuth as getAuthGoogle,getRedirectResult } from "firebase/auth";

export const  loginServices ={
    
    handleLogin:  async (email,password,dispatch, nav) => {
        
        const auth = getAuth();
        const {user} = await signInWithEmailAndPassword(auth,email,password)
        const createdUser = {
            email: user.email,
            id: user.uid,
            token: user.accessToken
        }
        dispatch(newUser(createdUser))
        localStorage.clear()
        localStorage.setItem('user', JSON.stringify(createdUser))
        nav('/')
    },
    getGoogleAuth: async (auth,dispatch,nav) =>{

        const { user } = await getRedirectResult(auth)
        
        if(user) {
            const createdUser = {
                name: user.displayName,
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }
            dispatch(newUser(createdUser))
            localStorage.clear()
            localStorage.setItem('user', JSON.stringify(createdUser))
        }
        nav('/')
    }


}