import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router";

export const fetchShowrooms = createAsyncThunk(
    'showrooms/fetchAll',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(`http://localhost:3002/showrooms`)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Не удалось связаться с сервером')
        }
    }
)


export const fetchShowroom = createAsyncThunk(
    'showroom/fetchShowroom',
    async (param: string | undefined, thunkAPI) => {
        console.log(param);
        try {
            const res = await axios.get(`http://localhost:3002/showrooms/${param}`)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Не удалось связаться с сервером')
        }
    }
)

