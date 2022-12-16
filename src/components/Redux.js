import React from 'react';
import {configureStore, createSlice} from "@reduxjs/toolkit";

const Redux = createSlice({
    name : "content",
    initialState:[],
    reducers:{
        addFav:(state, ctnt)=>{
            state.push(ctnt)
        },
        delFav:(state, ctnt)=>{
            state = state.filter((t)=>t.name !== ctnt.name)
        }
    }
})
export const {addFav, delFav} = Redux.actions;
export const Store = configureStore({
    reducer:{
        japanart: Redux.reducer,
    }
})