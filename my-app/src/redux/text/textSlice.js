import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getTextAsync = createAsyncThunk("text/getTextAsync", async (paras,format) => {
        const res = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${format}`)
        return res.data;
    }
)
export const textSlice = createSlice({
    name: "text",
    initialState: {
        data:"",
        isHtml:true
    },
    reducers:{
        changeHtml : (state,action) => {
            action.payload==="html" ? state.isHtml=true : state.isHtml=false 
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getTextAsync.fulfilled,(state,action) => {
            state.data = action.payload;
        })
    }
})
export const {changeHtml} = textSlice.actions;
export default textSlice.reducer;