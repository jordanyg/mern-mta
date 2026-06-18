import { apiSlice } from "./apiSlice";

const USERS_URL = 'api/users'

const usersApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        register : builder.mutation({
            query : (data)=>({
                method : 'POST' , 
                body: data,
                url : `${USERS_URL}/register`
            })

        }),
        login : builder.mutation({
            query : (data)=>({
                method : 'POST',
                url : `${USERS_URL}/login`,
                body : data
            })
        }),
        logout : builder.mutation({
            query : ()=>({
                method : 'POST',
                url : `${USERS_URL}/logout`,
            })
        })
    })
})

export const {useRegisterMutation, useLoginMutation ,useLogoutMutation} = usersApiSlice