import { createAction } from "@reduxjs/toolkit";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";


export const orderpi = createApi({
    reducerPath:"orderApi",
    basequery:fetchBaseQuery({  baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/order/`,}),
    endpoints:(builder)=>({
        mewOrder:builder.mutation({
           query:()=>({url:"new", method:"POST", body:order})
        })
    }),

})


export const {useNewOrder} = orderApi