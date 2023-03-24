import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IShowroom } from "../../interfaces/IShowroom";
import { fetchShowrooms } from "./ActionCreatorsShowroom";

interface ShowroomsState {
    showroom: IShowroom[];
    isLoading: boolean;
    error: string;
}


const initialState: ShowroomsState = {
    showroom: [],
    isLoading: false,
    error: ''
}

export const showroomSlice = createSlice({
    name: 'showrooms',
    initialState,
    reducers: {
       
    },
    extraReducers: {
        [fetchShowrooms.fulfilled.type]: (state, action: PayloadAction<IShowroom[]>) => {
            state.isLoading = false
            state.error = ''
            state.showroom = action.payload
        },
        [fetchShowrooms.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchShowrooms.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default showroomSlice.reducer