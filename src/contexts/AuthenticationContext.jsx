import React, { createContext, useContext, useReducer } from 'react'

const AuthContext = createContext()

const initialState = {
    user: null,
    isAuthenticated: false,
    token: false
}

function reducer(state,action){
    switch(action.type){
        case 'login':
            return {...state,user:action.payload.user,isAuthenticated:action.payload.token.user.aud,token:action.payload.token}

        case 'logout':
            return {...initialState}


        default: throw new Error("reducer type not defined")
    }
}


const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };
  

function AuthProvider ({children}){

    const [{user,isAuthenticated},dispatch] = useReducer(reducer,initialState)

    function login(token){
            dispatch({type:"login",payload:{user:FAKE_USER,token:token}})
        
    }

    function logout(){
        dispatch({type:"logout"})
    }

    return <AuthContext.Provider value={{user,isAuthenticated,login,logout}}>{children}</AuthContext.Provider>
}



function useAuth(){
    const context = useContext(AuthContext)

    if(context===undefined) throw new Error("auth context was used outside auth provider")

    return context
}

export {useAuth,AuthProvider}