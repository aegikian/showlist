import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IShowroom } from "../../interfaces/IShowroom";
import { fetchShowroom } from "./ActionCreatorsShowroom";

 interface ShowroomState {
    showroom: IShowroom | null;
    isLoading: boolean;
    error: string;
 }

const initialState: ShowroomState = {
    showroom: null ,
    isLoading: false,
    error: ''
 }

export const ShowroomPageSlice = createSlice({
        name: 'showroom',
    initialState,
    reducers: {
       
    },
    extraReducers: {
        [fetchShowroom.fulfilled.type]: (state, action: PayloadAction<IShowroom>) => {
            state.isLoading = false
            state.error = ''
            state.showroom = action.payload
        },
        [fetchShowroom.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchShowroom.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})
 
export default ShowroomPageSlice.reducer