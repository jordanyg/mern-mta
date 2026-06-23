import { apiSlice } from "./apiSlice";

const ORGANIZATION_URL = '/api/organizations'


const organizationApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        createOrg : builder.mutation({
            query: (data)=>({
                url : `${ORGANIZATION_URL}/create`,
                method : 'POST',
                body : data
            })
        }),
        getOrgs : builder.query({
            query: ()=>({
                url : `${ORGANIZATION_URL}`,
                method: 'GET',
            })
        }),
        joinOrg : builder.mutation({
            query : (data)=>({
                url : `${ORGANIZATION_URL}/join`,
                method : 'POST',
                body: data
            })
        }),
        getOrgMembers : builder.query({
            query:({orgId})=>({
                url : `${ORGANIZATION_URL}/${orgId}/members`,
                method : 'GET'
            })
        })
    })
})

export const {useCreateOrgMutation ,useGetOrgsQuery , useJoinOrgMutation , useGetOrgMembersQuery} = organizationApiSlice