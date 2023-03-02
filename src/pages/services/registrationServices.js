import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { newUser } from "../../redux/slices/userSlice";
import { getRedirectResult } from "firebase/auth";




export const services = {

    handleLogin: async (email,password,name, dispatch, navigate) => {
        
        const auth = getAuth();
        const {user} = await createUserWithEmailAndPassword (auth,email,password)
        const createdUser = {
            name: name,
            email: user.email,
            id: user.uid,
            token: user.accessToken
        }
        localStorage.setItem('user', JSON.stringify(createdUser));
        dispatch(newUser(createdUser))
        navigate('/')
    },


    getGoogleAuth: async (auth,dispatch,navigate) =>{

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
        console.log(user);
        navigate('/')
        }
}