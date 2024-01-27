import { createSlice } from "@reduxjs/toolkit";
const fetchStatusSlice = createSlice({
    name:'items',
    initialState:{
        fetchDone:false, //false :'PENDING' and true:'DONE'
        currentlyFetching:false,
    },
    reducers:{
        markFetchDone:(state,action)=>{
            void(state.fetchDone=true);
        },
        markFetchingStarted:(state,action)=>{
            void(state.currentlyFetching=true);
        },
        markFetchingDone:(state,action)=>{
            void(state.currentlyFetching=false);
        }
    }
})
export const fetchStatusActions=fetchStatusSlice.actions;
export default fetchStatusSlice;